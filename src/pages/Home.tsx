import { Fragment, useEffect } from 'react';

import { fetchWeather } from '../store/weather/weather-actions';
import { useAppDispatch } from '../hooks/useReduxTS';
import { SensorType } from '../types';

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeather(SensorType.floor1));
  }, []);
  return (
    <Fragment>
      <h1>Home page</h1>
      <div className="vstack gap-4">
        <div className="card">
          <div className="card-body"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
