import { AppDispatch, RootState } from '../index';

import { weatherActions, WeatherStateT } from './weather-slice';
import { resType, SensorType, WeatherDataType } from '../../types';

export const fetchWeather = (id: keyof WeatherStateT) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const host = getState().root.host;
    const res = await fetch(`${host}/api/weather.php?id=${id}`);
    if (!res.ok) throw new Error('fetchWeather: Response failed');
    const resData: resType = await res.json();
    const weather = resData.data[0];
    if (!weather) return;
    const weatherData: WeatherDataType = {
      id: weather.id,
      reg_date: weather.reg_date,
      t: +weather.t,
      p: +weather.p,
      v: +weather.v,
    };
    dispatch(
      weatherActions.setWeatherData({
        id,
        weather: weatherData,
      }),
    );
  };
};
