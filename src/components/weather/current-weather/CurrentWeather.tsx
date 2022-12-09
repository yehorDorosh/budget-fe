import { v4 as uuid } from 'uuid';

import { useAppSelector } from '../../../hooks/useReduxTS';
import { SensorType, WeatherDataType } from '../../../types';
import useTime from '../../../hooks/useTime';

import CurrentWeatherRow from './CurrentWeatherRow';
import CurrentWeatherParam from './CurrentWeatherParam';

const CurrentWeather = () => {
  enum Label {
    id = 'ID',
    data = 'Time',
    t = 'Temperature, C°',
    p = 'Pressure, Pa',
    v = 'Power supply, V',
  }

  let weatherData: WeatherDataType[] = useAppSelector((state) => {
    return [
      state.weather[SensorType.floor1],
      state.weather[SensorType.floor2],
      state.weather[SensorType.outside],
    ];
  });

  weatherData = weatherData.map((sensor) => {
    const { time: newTime } = useTime(sensor.reg_date);
    return {
      ...sensor,
      reg_date: newTime,
    };
  });

  return (
    <div className="card container">
      <div className="card-body vstack gap-2 gap-md-0">
        {weatherData.map((sensor, i, arr) => {
          let rounded: string;
          switch (i) {
            case 0:
              rounded = 'rounded-top-md ';
              break;
            case arr.length - 1:
              rounded = 'rounded-bottom-md ';
              break;
            default:
              rounded = 'rounded-none-md ';
          }
          const rowClasses = `${rounded}text-bg-secondary ${i % 2 !== 0 ? ' bg-opacity-75' : ''}`;
          return (
            <CurrentWeatherRow key={uuid()} className={rowClasses}>
              <CurrentWeatherParam data={sensor.id} label={Label.id} showLabel={i === 0} />
              <CurrentWeatherParam data={sensor.reg_date} label={Label.data} showLabel={i === 0} />
              <CurrentWeatherParam data={sensor.t} label={Label.t} showLabel={i === 0} />
              <CurrentWeatherParam data={sensor.p} label={Label.p} showLabel={i === 0} />
              <CurrentWeatherParam
                data={sensor.v}
                label={Label.v}
                showLabel={i === 0}
                colorStatus={{ min: 2.8, max: 3.6 }}
              />
            </CurrentWeatherRow>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWeather;
