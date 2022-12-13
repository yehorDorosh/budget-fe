import React from 'react';

import getLocale from '../../../utils/locale';

interface CurrentWeatherParamProps {
  data: number | string;
  label: string;
  showLabel?: boolean;
  colorStatus?: {
    min: number;
    max: number;
  };
  className: string;
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
    <div className={props.className}>
      <div className="vstack gap-2 border rounded p-1 my-1 p-md-0 my-md-0 border-none-md">
        <div className={`text-truncate ${props.showLabel ? '' : 'd-md-none'}`}>{props.label}</div>
        <div className={`fw-bold ${statusClass}`}>
          {typeof props.data === 'string'
            ? props.data.split(' ').map((str, i) => {
                return (
                  <span key={`${i}-${str}`} className={i !== 0 ? 'd-none d-md-inline' : ''}>
                    {str}
                    {i === 0 && '\u00A0'}
                  </span>
                );
              })
            : new Intl.NumberFormat(`${getLocale()}`, {}).format(props.data)}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherParam;
