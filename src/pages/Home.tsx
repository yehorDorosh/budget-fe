import { Fragment, useEffect } from 'react';

import { fetchWeather } from '../store/weather/weather-actions';
import { useAppDispatch } from '../hooks/useReduxTS';
import { SensorType } from '../types';

import CurrentWeather from '../components/weather/current-weather/CurrentWeather';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeather(SensorType.floor1));
    dispatch(fetchWeather(SensorType.floor2));
    dispatch(fetchWeather(SensorType.outside));
  }, []);
  return (
    <Fragment>
      <div className="vstack gap-4">
        <h1>Home page</h1>
        <CurrentWeather />
      </div>
    </Fragment>
  );
};

export default Home;
