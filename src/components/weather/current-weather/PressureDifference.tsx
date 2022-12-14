import React from 'react';
import { useAppSelector } from '../../../hooks/useReduxTS';

import { SensorType, WeatherDataType } from '../../../types';
import range from '../../../utils/interpolation';
import classes from './PressureDifference.module.scss';

interface CoefficientsT {
  a: number;
  b: number;
}

const PressureDifference: React.FC<{ onChange: (hours: number) => void }> = (props) => {
  const weatherData: WeatherDataType[] = useAppSelector((state) => {
    const arr = [
      ...state.weather[SensorType.floor1],
      ...state.weather[SensorType.floor2],
      ...state.weather[SensorType.outside],
    ];
    return arr
      .filter((item) => item.id !== 'N/A')
      .sort((a, b) => {
        return new Date(a.reg_date).getTime() - new Date(b.reg_date).getTime();
      });
  });
  const pressureDifference = getPressureDifference(weatherData).diff;

  function approximation(data: number[]): CoefficientsT {
    const n = data.length;
    const sumX = (n * (n + 1)) / 2;
    const sumY = data.reduce((perv, curr) => perv + curr);
    const arrX2 = data.map((y, x) => Math.pow(x + 1, 2));
    const sumX2 = arrX2.reduce((prev, curr) => prev + curr);
    const arrXY = data.map((y, x) => (x + 1) * y);
    const sumXY = arrXY.reduce((prev, curr) => prev + curr);
    const a = (n * sumXY - sumX * sumY) / (n * sumX2 - Math.pow(sumX, 2));
    const b = (sumY - a * sumX) / n;
    return { a, b };
  }

  function getPressureDifference(data: WeatherDataType[]): { diff: number; k: CoefficientsT } {
    if (!data.length) {
      return {
        diff: 0,
        k: { a: 0, b: 0 },
      };
    }
    const pressureLog = data.map((sensor) => sensor.p);
    const coefficients = approximation(pressureLog);
    const y0 = coefficients.a * 1 + coefficients.b;
    const y1 = coefficients.a * pressureLog.length + coefficients.b;
    const pressureDiff = y1 - y0;
    return {
      diff: Math.round(pressureDiff),
      k: coefficients,
    };
  }

  function renderLeftBar(pressure: number) {
    return range(-250, 0, 0, 50, pressure);
  }

  function renderRightBar(pressure: number) {
    return range(0, 250, 50, 0, pressure);
  }

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(+e.target.value);
  }

  return (
    <div className="card container">
      <div className="card-body">
        <div className={classes['pressure-diff-container']}>
          <p className={classes['pressure-diff']}>
            Pressure changed on <span>{pressureDifference}Pa</span> per
            <input type="number" defaultValue={2} onChange={inputHandler} />
            hours.
          </p>
          <ul className={classes['bar-legend']}>
            <li>-250Pa (Storm)</li>
            <li>-200Pa</li>
            <li>-150Pa (Rain)</li>
            <li>-100Pa</li>
            <li>-50Pa (No changes)</li>
            <li>0Pa</li>
            <li>50Pa (No changes)</li>
            <li>100Pa</li>
            <li>150Pa (Sunny)</li>
            <li>200Pa</li>
            <li>250Pa</li>
          </ul>
          <div className={classes['bar']}>
            <div
              className={classes['bar__left']}
              style={{ left: `${renderLeftBar(pressureDifference)}%` }}
            ></div>
            <div
              className={classes['bar__right']}
              style={{ right: `${renderRightBar(pressureDifference)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressureDifference;
