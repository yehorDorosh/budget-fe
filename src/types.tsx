export interface weatherData {
  id: string;
  reg_date: string;
  t: number;
  p: number;
  v: number;
  a: number;
};

export interface link {
  label: string,
  path: string,
};

export type links = link[];
