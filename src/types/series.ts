export type SeriesData = {
  data: number[];
  name: string;
};
export type Series = SeriesData[];

export type RechartData = {
  data: {
    [key: string]: string | number;
  }[];
  prefecturesNameList: string[];
};
