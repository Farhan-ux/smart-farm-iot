import { irrigationSchedule } from '../data/farm';

const statusStyle: Record<string, { color: string; label: string }> = {
  running:    { color: '#4ade80', label: 'RUNNING' },
  scheduled: { color: '#38bdf8', label: 'SCHEDULED' },
  completed: { color: '#6b7280', label: 'DONE' },
};

export default function IrrigationSchedule() {
  return (
    <div className="farm-panel h-full flex flex-col">
      <div className="farm-header">
        <span className="farm-label">Irrigation Queue</span>
        <span className="text-[10px] text-gray-500">{irrigationSchedule.filter(e => e.status === 'running').length} active</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {irrigationSchedule.map((ev, i) => {
          const s = statusStyle[ev.status];
          return (
            <div key={i} className="px-3 py-2 border-b border-farm-border/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-white font-bold text-xs">{ev.zone}</span>
                <div>
                  <div className="text-[11px] text-gray-300">{ev.startTime} | {ev.duration} min</div>
                  <div className="text-[9px] text-gray-500">{ev.volume}L</div>
                </div>
              </div>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded"
                style={{ backgroundColor: s.color + '22', color: s.color }}
              >{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}