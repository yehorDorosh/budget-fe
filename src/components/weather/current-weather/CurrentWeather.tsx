import { v4 as uuid } from 'uuid';

import { useAppSelector } from '../../../hooks/useReduxTS';
import { SensorType, WeatherDataType } from '../../../types';
import useTime from '../../../hooks/useTime';

import CurrentWeatherRow from './CurrentWeatherRow';
import CurrentWeatherParam from './CurrentWeatherParam';
import { defaultWeatherData } from '../../../store/weather/weather-slice';

const CurrentWeather = () => {
  enum Label {
    id = 'ID',
    data = 'Date',
    t = 'Temperature, C°',
    p = 'Pressure, Pa',
    v = 'Power supply, V',
  }

  let weatherData: WeatherDataType[] = useAppSelector((state) => {
    const floor1 = state.weather[SensorType.floor1].at(-1);
    const floor2 = state.weather[SensorType.floor2].at(-1);
    const outside = state.weather[SensorType.outside].at(-1);
    return [
      floor1 ?? defaultWeatherData[0],
      floor2 ?? defaultWeatherData[0],
      outside ?? defaultWeatherData[0],
    ];
  });

  weatherData = weatherData.map((sensor) => {
    const { time: newTime, date: newDate } = useTime(sensor.reg_date);
    return {
      ...sensor,
      reg_date: `${newTime} ${newDate}`,
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
              <CurrentWeatherParam
                className="col-6 col-md-2"
                data={sensor.id}
                label={Label.id}
                showLabel={i === 0}
              />
              <CurrentWeatherParam
                className="col-6 col-md-4"
                data={sensor.reg_date}
                label={Label.data}
                showLabel={i === 0}
              />
              <CurrentWeatherParam
                className="col-6 col-md-2"
                data={sensor.t}
                label={Label.t}
                showLabel={i === 0}
              />
              <CurrentWeatherParam
                className="col-6 col-md-2"
                data={sensor.p}
                label={Label.p}
                showLabel={i === 0}
              />
              <CurrentWeatherParam
                className="col-6 col-md-2"
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
