export interface FieldZone {
  id: string;
  crop: string;
  growthStage: string;
  healthScore: number;
  area: number;
  soilMoisture: number;
  lastIrrigation: string;
}

export interface SensorReading {
  zone: string;
  moisture: number;
  pH: number;
  temperature: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
}

export interface WeatherData {
  temp: number;
  humidity: number;
  wind: number;
  uv: number;
  rain: number;
  condition: string;
  forecast: { day: string; high: number; low: number; rain: number; condition: string }[];
}

export interface IrrigationEvent {
  zone: string;
  startTime: string;
  duration: number;
  volume: number;
  status: 'scheduled' | 'running' | 'completed';
}

export const fieldZones: FieldZone[] = [
  { id: 'A1', crop: 'Wheat', growthStage: 'Tillering', healthScore: 92, area: 2.4, soilMoisture: 68, lastIrrigation: '06:00' },
  { id: 'A2', crop: 'Wheat', growthStage: 'Stem Extension', healthScore: 88, area: 2.4, soilMoisture: 65, lastIrrigation: '06:00' },
  { id: 'B1', crop: 'Corn', growthStage: 'V6', healthScore: 78, area: 3.1, soilMoisture: 55, lastIrrigation: '04:30' },
  { id: 'B2', crop: 'Corn', growthStage: 'V8', healthScore: 82, area: 3.1, soilMoisture: 60, lastIrrigation: '04:30' },
  { id: 'C1', crop: 'Soybeans', growthStage: 'R2', healthScore: 95, area: 2.8, soilMoisture: 72, lastIrrigation: '05:00' },
  { id: 'C2', crop: 'Soybeans', growthStage: 'R3', healthScore: 91, area: 2.8, soilMoisture: 70, lastIrrigation: '05:00' },
  { id: 'D1', crop: 'Tomatoes', growthStage: 'Fruiting', healthScore: 70, area: 1.2, soilMoisture: 45, lastIrrigation: '07:30' },
  { id: 'D2', crop: 'Lettuce', growthStage: 'Heading', healthScore: 96, area: 0.8, soilMoisture: 75, lastIrrigation: '06:30' },
];

export const sensorData: SensorReading[] = [
  { zone: 'A1', moisture: 68, pH: 6.5, temperature: 18.2, nitrogen: 42, phosphorus: 28, potassium: 35 },
  { zone: 'A2', moisture: 65, pH: 6.4, temperature: 18.0, nitrogen: 40, phosphorus: 30, potassium: 33 },
  { zone: 'B1', moisture: 55, pH: 6.8, temperature: 19.1, nitrogen: 38, phosphorus: 22, potassium: 40 },
  { zone: 'B2', moisture: 60, pH: 6.7, temperature: 19.3, nitrogen: 35, phosphorus: 25, potassium: 38 },
  { zone: 'C1', moisture: 72, pH: 6.2, temperature: 17.8, nitrogen: 45, phosphorus: 32, potassium: 30 },
  { zone: 'C2', moisture: 70, pH: 6.3, temperature: 17.5, nitrogen: 43, phosphorus: 30, potassium: 28 },
  { zone: 'D1', moisture: 45, pH: 6.9, temperature: 21.4, nitrogen: 50, phosphorus: 35, potassium: 42 },
  { zone: 'D2', moisture: 75, pH: 6.1, temperature: 16.2, nitrogen: 48, phosphorus: 38, potassium: 25 },
];

export const weather: WeatherData = {
  temp: 24,
  humidity: 62,
  wind: 12,
  uv: 6,
  rain: 0,
  condition: 'Partly Cloudy',
  forecast: [
    { day: 'Mon', high: 26, low: 14, rain: 0, condition: 'Sunny' },
    { day: 'Tue', high: 24, low: 13, rain: 10, condition: 'Cloudy' },
    { day: 'Wed', high: 22, low: 12, rain: 60, condition: 'Rain' },
    { day: 'Thu', high: 20, low: 11, rain: 40, condition: 'Showers' },
    { day: 'Fri', high: 25, low: 13, rain: 5, condition: 'Mostly Sunny' },
    { day: 'Sat', high: 27, low: 15, rain: 0, condition: 'Sunny' },
    { day: 'Sun', high: 28, low: 16, rain: 0, condition: 'Clear' },
  ],
};

export const irrigationSchedule: IrrigationEvent[] = [
  { zone: 'D1', startTime: '14:00', duration: 45, volume: 2400, status: 'running' },
  { zone: 'B1', startTime: '16:00', duration: 30, volume: 1800, status: 'scheduled' },
  { zone: 'B2', startTime: '16:30', duration: 30, volume: 1800, status: 'scheduled' },
  { zone: 'A1', startTime: '18:00', duration: 20, volume: 1200, status: 'scheduled' },
  { zone: 'A2', startTime: '18:20', duration: 20, volume: 1200, status: 'scheduled' },
  { zone: 'C1', startTime: '20:00', duration: 25, volume: 1500, status: 'scheduled' },
  { zone: 'C2', startTime: '20:30', duration: 25, volume: 1500, status: 'scheduled' },
];

export function healthColor(score: number): string {
  if (score >= 90) return '#4ade80';
  if (score >= 75) return '#facc15';
  if (score >= 60) return '#f59e0b';
  return '#ef4444';
}
