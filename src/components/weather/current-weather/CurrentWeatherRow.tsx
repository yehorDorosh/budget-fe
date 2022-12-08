import React from 'react';

const CurrentWeatherRow: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="row justify-content-between border">{props.children}</div>;
};

export default CurrentWeatherRow;
