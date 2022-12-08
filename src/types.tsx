export interface WeatherDataType {
  id: string;
  reg_date: string;
  t: number;
  p: number;
  v: number;
};

export interface LinkT {
  page: string,
  label: string,
  path: string,
};

export type LinksT = LinkT[];

export enum SensorType {
  floor1 = '1',
  floor2 = 'second-floor',
  outside = 'out-of-door',
};

export interface resType {
  data: any[]
};
