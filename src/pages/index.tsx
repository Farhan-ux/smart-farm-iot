import type { NextPage } from 'next';
import FarmHeader from '../components/FarmHeader';
import FieldMap from '../components/FieldMap';
import SoilSensors from '../components/SoilSensors';
import CropHealthTable from '../components/CropHealthTable';
import IrrigationSchedule from '../components/IrrigationSchedule';
import WeatherForecast from '../components/WeatherForecast';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-farm-bg overflow-hidden">
      <FarmHeader />
      <div className="flex flex-1 min-h-0 p-2 gap-2">
        {/* Left: Field Map */}
        <div className="w-72 shrink-0">
          <FieldMap />
        </div>
        {/* Center: Sensors + Crop Health */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <div className="flex-1 min-h-0">
            <SoilSensors />
          </div>
          <div className="flex-1 min-h-0">
            <CropHealthTable />
          </div>
        </div>
        {/* Right: Weather + Irrigation */}
        <div className="w-64 shrink-0 flex flex-col gap-2">
          <div className="flex-1 min-h-0">
            <WeatherForecast />
          </div>
          <div className="flex-1 min-h-0">
            <IrrigationSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;