import { useEffect } from "react";

import { fetchWeather } from '../store/weather/weather-actions';
import { useAppDispatch } from "../hooks/useReduxTS";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeather({}));
  }, []);
  return (
    <h1>Home page</h1>
  );
};

export default Home;
