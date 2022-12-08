import React from 'react';

interface CurrentWeatherParamProps {
  data: number | string;
  label: string;
  showLabel?: boolean,
}

const CurrentWeatherParam: React.FC<CurrentWeatherParamProps> = (props) => {
  return (
    <div className="col-xs-12 col-sm-6 col-md">
      <div className="vstack gap-2">
        <div className={props.showLabel ? '' : 'd-md-none'}>{props.label}</div>
        <div>{props.data}</div>
      </div>
    </div>
  );
};

export default CurrentWeatherParam;
