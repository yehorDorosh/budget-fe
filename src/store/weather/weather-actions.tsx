import { AppDispatch, RootState } from '../index';

import consoleLogError from '../../utils/e-log';
import { weatherActions, WeatherStateT } from './weather-slice';
import { ResType, WeatherDataType } from '../../types';
import serverCurrentTime, {toLocalTime, toServerTime} from '../../utils/serverCurrentTime';
import useTime from '../../hooks/useTime';

export const fetchWeather = (id: keyof WeatherStateT, startDate?: string, endDate?: string) => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const host = getState().root.host;
    const currentDate = await serverCurrentTime(host);
    const timeDifference = new Date().getTime() - new Date(currentDate).getTime();
    let path = `${host}/api/weather.php?id=${id}`;
    if (startDate && endDate) {
      path = `${host}/api/weather.php?id=${id}&dateFrom=${startDate}&dateTo=${endDate}`;
    } else if (startDate) {
      const { dateTime: currentServerDateFormatted } = useTime(currentDate);
      const  startServerDateFormatted = useTime(toServerTime(startDate, timeDifference)).dateTime;
      path = `${host}/api/weather.php?id=${id}&dateFrom=${startServerDateFormatted}&dateTo=${currentServerDateFormatted}`;
    }

    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error('fetchWeather: Response failed');
      const resData: ResType = await res.json();
      let weatherData = resData.data;
      if (!weatherData || !weatherData.length) return;
      weatherData = weatherData.map(item => {
        const correctedDate = toLocalTime(item.reg_date, timeDifference);
        return {
          id:item.id,
          reg_date: useTime(correctedDate).dateTime,
          t: +item.t,
          p: +item.p,
          v: +item.v,
        } as WeatherDataType;
      });
      dispatch(
        weatherActions.setWeatherData({
          id,
          weather: weatherData,
        })
      );
    } catch (e) {
      consoleLogError(e);
    }
  };
};
