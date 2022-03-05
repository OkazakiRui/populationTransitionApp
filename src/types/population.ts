export type Population = {
  year: number;
  value: number;
};

type SuccessPopulationFetch = {
  message: null;
  result: {
    boundaryYear: number;
    data: {
      label: '総人口' | '年少人口' | '生産年齢人口' | '老年人口';
      data: Population[];
    }[];
  };
};

type FailFetch = {
  description: string;
  statusCode: string;
  message: string;
};

export type PopulationResult = SuccessPopulationFetch | FailFetch;
