import React from 'react';

interface CurrentWeatherRowProps {
  children: React.ReactNode;
  className?: string;
}

const CurrentWeatherRow: React.FC<CurrentWeatherRowProps> = (props) => {
  return (
    <div className={`row justify-content-between p-2 ${props.className}`}>{props.children}</div>
  );
};

export default CurrentWeatherRow;
