import { weather } from '../data/farm';

export default function FarmHeader() {
  return (
    <header className="h-10 bg-farm-card border-b border-farm-border flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-crop-green font-bold text-sm">GREENFIELD</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-400 text-xs">Smart Farm IoT</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-500 text-[10px]">8 ZONES ACTIVE</span>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <span className="text-gray-400">{weather.condition}</span>
        <span className="text-gray-600">|</span>
        <span className="text-crop-green">{weather.temp}°C</span>
        <span className="text-crop-blue">{weather.humidity}%</span>
        <span className="text-gray-500">{weather.wind} km/h</span>
        <span className="text-gray-600">|</span>
        <span className="text-gray-500">UV {weather.uv}</span>
      </div>
    </header>
  );
}