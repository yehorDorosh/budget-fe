import { weatherActions } from './weather-slice';
import { weatherData } from '../../types';
import { AppDispatch } from '../index';

type fetchedWeatherItem = {
  id: string;
  reg_date: string;
  t: string;
  p: string;
  v: string;
  a: string;
};

export const fetchWeather = (req: any) => {
  return async (dispatch: AppDispatch) => {
    const currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    const res = await fetch(`http://35.178.207.100/api/weather.php?id=1&date=${currentDate}`);
    if (!res.ok) throw Error('Response failed');
    const resData = await res.json();
    const weatherData: weatherData[] = resData.data.map((item: fetchedWeatherItem): weatherData => {
      return {
        id: item.id,
        reg_date: item.reg_date,
        t: +item.t,
        p: +item.p,
        v: +item.v,
        a: +item.a,
      };
    });
    console.log(resData);
    dispatch(weatherActions.setWeatherData(weatherData));
  };
};
