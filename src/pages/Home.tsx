import { Fragment, useEffect } from 'react';

import { fetchWeather } from '../store/weather/weather-actions';
import { useAppDispatch } from '../hooks/useReduxTS';
import { SensorType } from '../types';

import CurrentWeather from '../components/weather/current-weather/CurrentWeather';
import PressureDifference from '../components/weather/current-weather/PressureDifference';

const Home = () => {
  const dispatch = useAppDispatch();
  const periodH = -2;
  const startDate = new Date(
    new Date().setHours(
      new Date().getHours() + periodH
    )
  ).toString();

  useEffect(() => {
    dispatch(fetchWeather(SensorType.floor1, startDate));
    dispatch(fetchWeather(SensorType.floor2, startDate));
    dispatch(fetchWeather(SensorType.outside, startDate));
  }, []);

  return (
    <Fragment>
      <div className="vstack gap-4">
        <h1>Home page</h1>
        <CurrentWeather />
        <PressureDifference currentPressure={0} />
      </div>
    </Fragment>
  );
};

export default Home;
