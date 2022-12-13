import { ResType } from '../types';
import consoleLogError from './e-log';

const serverCurrentTime = async (host: string) => {
  try {
    const res = await fetch(`${host}/api/time.php`);
    if (!res.ok) throw new Error('Server time fetch was failed');
    const resData: ResType = await res.json();
    const time = resData.time;
    const serverHours = +time.split(':')[0];
    const serverDate = new Date(new Date().setHours(serverHours)).toString();
    return serverDate;
  } catch (e) {
    consoleLogError(e);
    return '';
  }
};

export const toLocalTime = (date: string, timeDifference: number) => {
  return new Date(new Date(date).getTime() + timeDifference).toString();
};

export const toServerTime = (date: string, timeDifference: number) => {
  return new Date(new Date(date).getTime() - timeDifference).toString();
};

export default serverCurrentTime;
