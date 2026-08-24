import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { sensorData } from '../data/farm';

type Metric = 'moisture' | 'pH' | 'temperature' | 'nitrogen' | 'phosphorus' | 'potassium';

const metrics: { key: Metric; label: string; unit: string; color: string; range: [number, number] }[] = [
  { key: 'moisture', label: 'Soil Moisture', unit: '%', color: '#38bdf8', range: [30, 90] },
  { key: 'pH', label: 'pH Level', unit: '', color: '#a16207', range: [5, 8] },
  { key: 'temperature', label: 'Soil Temp', unit: '°C', color: '#f59e0b', range: [10, 30] },
  { key: 'nitrogen', label: 'Nitrogen (N)', unit: 'ppm', color: '#4ade80', range: [20, 60] },
  { key: 'phosphorus', label: 'Phosphorus (P)', unit: 'ppm', color: '#c084fc', range: [10, 50] },
  { key: 'potassium', label: 'Potassium (K)', unit: 'ppm', color: '#fb923c', range: [15, 50] },
];

export default function SoilSensors() {
  const [selected, setSelected] = useState<Metric>('moisture');
  const m = metrics.find(x => x.key === selected)!;

  const chartData = sensorData.map(s => ({ zone: s.zone, value: s[m.key] }));

  return (
    <div className="farm-panel h-full flex flex-col">
      <div className="farm-header">
        <span className="farm-label">Soil Sensors</span>
      </div>
      <div className="flex gap-1 px-3 py-1 border-b border-farm-border overflow-x-auto shrink-0">
        {metrics.map(m => (
          <button
            key={m.key}
            onClick={() => setSelected(m.key)}
            className={`px-2 py-0.5 rounded text-[10px] shrink-0 cursor-pointer transition-colors ${
              selected === m.key ? 'text-white' : 'text-gray-500 hover:text-gray-300'
            }`}
            style={selected === m.key ? { backgroundColor: m.color + '22', color: m.color } : undefined}
          >{m.label}</button>
        ))}
      </div>
      <div className="flex-1 min-h-0 p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="zone" tick={{ fontSize: 10, fill: '#6b7280' }} axisLine={false} tickLine={false} />
            <YAxis domain={m.range} tick={{ fontSize: 9, fill: '#6b7280' }} axisLine={false} tickLine={false} width={30} />
            <Tooltip contentStyle={{ backgroundColor: '#142316', border: '1px solid #1f3322', fontSize: 11, borderRadius: 4 }} />
            <Line type="monotone" dataKey="value" stroke={m.color} strokeWidth={2} dot={{ fill: m.color, r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}