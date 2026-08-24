import { fieldZones, healthColor } from '../data/farm';

export default function CropHealthTable() {
  return (
    <div className="farm-panel h-full flex flex-col">
      <div className="farm-header">
        <span className="farm-label">Crop Health</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        <table className="w-full text-[11px]">
          <thead className="sticky top-0 bg-farm-card">
            <tr className="border-b border-farm-border">
              <th className="text-left px-3 py-1.5 text-gray-500 font-normal">Zone</th>
              <th className="text-left px-2 py-1.5 text-gray-500 font-normal">Crop</th>
              <th className="text-left px-2 py-1.5 text-gray-500 font-normal">Stage</th>
              <th className="text-right px-2 py-1.5 text-gray-500 font-normal">Health</th>
              <th className="text-right px-2 py-1.5 text-gray-500 font-normal">Moisture</th>
              <th className="text-right px-3 py-1.5 text-gray-500 font-normal">Area</th>
            </tr>
          </thead>
          <tbody>
            {fieldZones.map(z => (
              <tr key={z.id} className="border-b border-farm-border/30 hover:bg-farm-panel/50">
                <td className="px-3 py-1.5 text-white font-bold">{z.id}</td>
                <td className="px-2 py-1.5 text-gray-300">{z.crop}</td>
                <td className="px-2 py-1.5 text-gray-400">{z.growthStage}</td>
                <td className="px-2 py-1.5 text-right">
                  <span style={{ color: healthColor(z.healthScore) }}>{z.healthScore}%</span>
                </td>
                <td className="px-2 py-1.5 text-right">
                  <span className={z.soilMoisture < 50 ? 'text-crop-orange' : 'text-crop-blue'}>{z.soilMoisture}%</span>
                </td>
                <td className="px-3 py-1.5 text-right text-gray-500">{z.area} ha</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}