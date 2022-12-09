import React from 'react';

interface CurrentWeatherParamProps {
  data: number | string;
  label: string;
  showLabel?: boolean;
  colorStatus?: {
    min: number;
    max: number;
  };
}

const CurrentWeatherParam: React.FC<CurrentWeatherParamProps> = (props) => {
  let statusClass = '';
  if (props.colorStatus) {
    const value = +props.data;
    if (value >= props.colorStatus.max) statusClass = 'text-success';
    else if (props.colorStatus.min < value) statusClass = 'text-warning';
    else if (value <= props.colorStatus.min) statusClass = 'text-danger';
  }

  return (
    <div className="col-6 col-md">
      <div className="vstack gap-2 border rounded p-1 my-1 p-md-0 my-md-0 border-none-md">
        <div className={`text-truncate ${props.showLabel ? '' : 'd-md-none'}`}>{props.label}</div>
        <div className={`fw-bold ${statusClass}`}>{props.data}</div>
      </div>
    </div>
  );
};

export default CurrentWeatherParam;
