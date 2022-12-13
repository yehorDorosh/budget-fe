import React, { useState } from 'react';

import { WeatherDataType } from '../../../types';

interface CoefficientsT {
  a: number;
  b: number;
}

interface PressureDifferenceProps {
  currentPressure: number;
}

const PressureDifference: React.FC<PressureDifferenceProps> = (props) => {
  const [pressureDifference, setPressureDifference] = useState(0);

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

  function getPessureDifference(data: WeatherDataType[]): { diff: number; k: CoefficientsT } {
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

  return (
    <div className="card container">
      <div className="card-body">dwdwd</div>
    </div>
  );
};

export default PressureDifference;
