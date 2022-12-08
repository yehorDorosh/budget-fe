import CurrentWeatherRow from './CurrentWeatherRow';
import CurrentWeatherParam from './CurrentWeatherParam';
import { useAppSelector } from '../../../hooks/useReduxTS';
import { SensorType } from '../../../types';

const CurrentWeather = () => {
  enum Label {
    id = 'ID',
    data = 'Data, time',
    t = 'Temperature, C°',
    p = 'Pressure, Pa',
    v = 'Power supply, V',
  }
  const floor1 = useAppSelector((s) => s.weather[SensorType.floor1]);
  const floor2 = useAppSelector((s) => s.weather[SensorType.floor2]);
  const outside = useAppSelector((s) => s.weather[SensorType.outside]);

  return (
    <div className="card container">
      <div className="card-body vstack gap-2 gap-md-0">
        <CurrentWeatherRow>
          <CurrentWeatherParam data={SensorType.floor1} label={Label.id} showLabel />
          <CurrentWeatherParam data={floor1.reg_date} label={Label.data} showLabel />
          <CurrentWeatherParam data={floor1.t} label={Label.t} showLabel />
          <CurrentWeatherParam data={floor1.p} label={Label.p} showLabel />
          <CurrentWeatherParam data={floor1.v} label={Label.v} showLabel />
        </CurrentWeatherRow>
        <CurrentWeatherRow>
          <CurrentWeatherParam data={SensorType.floor2} label={Label.id} showLabel />
          <CurrentWeatherParam data={floor2.reg_date} label={Label.data} showLabel />
          <CurrentWeatherParam data={floor2.t} label={Label.t} showLabel />
          <CurrentWeatherParam data={floor2.p} label={Label.p} showLabel />
          <CurrentWeatherParam data={floor2.v} label={Label.v} showLabel />
        </CurrentWeatherRow>
        <CurrentWeatherRow>
          <CurrentWeatherParam data={SensorType.outside} label={Label.id} showLabel />
          <CurrentWeatherParam data={outside.reg_date} label={Label.data} showLabel />
          <CurrentWeatherParam data={outside.t} label={Label.t} showLabel />
          <CurrentWeatherParam data={outside.p} label={Label.p} showLabel />
          <CurrentWeatherParam data={outside.v} label={Label.v} showLabel />
        </CurrentWeatherRow>
      </div>
    </div>
  );
};

export default CurrentWeather;
