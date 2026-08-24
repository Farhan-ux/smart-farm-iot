import { weather } from '../data/farm';

const condIcons: Record<string, string> = {
  Sunny: '☀️',
  Cloudy: '☁️',
  Rain: '🌧️',
  Showers: '🌦️',
  'Mostly Sunny': '⛅',
  Clear: '☀️',
  'Partly Cloudy': '⛅',
};

export default function WeatherForecast() {
  return (
    <div className="farm-panel h-full flex flex-col">
      <div className="farm-header">
        <span className="farm-label">Weather Forecast</span>
        <span className="text-[10px] text-gray-500">7-day</span>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Current */}
        <div className="px-3 py-2 border-b border-farm-border/50">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-white">{weather.temp}°C</span>
              <span className="text-gray-400 text-xs ml-1">{weather.condition}</span>
            </div>
            <span className="text-2xl">{condIcons[weather.condition] || '🌤'}</span>
          </div>
          <div className="flex gap-3 mt-1 text-[10px] text-gray-500">
            <span>Humidity: <span className="text-crop-blue">{weather.humidity}%</span></span>
            <span>Wind: <span className="text-gray-300">{weather.wind} km/h</span></span>
            <span>UV: <span className="text-crop-yellow">{weather.uv}</span></span>
          </div>
        </div>
        {/* Forecast */}
        {weather.forecast.map((d, i) => (
          <div key={i} className="px-3 py-1.5 border-b border-farm-border/20 flex items-center justify-between">
            <span className="text-[11px] text-gray-400 w-8">{d.day}</span>
            <span className="text-sm w-8">{condIcons[d.condition] || '🌤'}</span>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-crop-orange">{d.high}°</span>
              <span className="text-crop-blue">{d.low}°</span>
            </div>
            {d.rain > 0 && (
              <span className="text-[9px] text-crop-blue w-12 text-right">{d.rain}%</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}