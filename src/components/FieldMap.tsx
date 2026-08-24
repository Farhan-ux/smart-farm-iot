import { fieldZones, healthColor } from '../data/farm';

export default function FieldMap() {
  return (
    <div className="farm-panel h-full flex flex-col">
      <div className="farm-header">
        <span className="farm-label">Field Map</span>
        <span className="text-[10px] text-gray-500">16.6 ha total</span>
      </div>
      <div className="flex-1 p-3">
        <div className="grid grid-cols-4 gap-2 h-full">
          {fieldZones.map(z => (
            <div
              key={z.id}
              className="rounded-lg border-2 flex flex-col items-center justify-center p-2 transition-all hover:scale-105 cursor-pointer"
              style={{
                borderColor: healthColor(z.healthScore) + '66',
                backgroundColor: healthColor(z.healthScore) + '0d',
              }}
            >
              <span className="text-white font-bold text-sm">{z.id}</span>
              <span className="text-[10px] text-gray-300 mt-0.5">{z.crop}</span>
              <span className="text-[9px] text-gray-500">{z.growthStage}</span>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-8 h-1.5 bg-farm-border rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${z.healthScore}%`, backgroundColor: healthColor(z.healthScore) }} />
                </div>
                <span className="text-[9px]" style={{ color: healthColor(z.healthScore) }}>{z.healthScore}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}