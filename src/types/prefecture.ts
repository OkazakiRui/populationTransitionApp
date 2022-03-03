export type Prefecture = {
  prefCode: number;
  prefName: string;
};

type SuccessPrefFetch = {
  message: null;
  result: Prefecture[];
};

type FailFetch = {
  description: string;
  statusCode: string;
  message: string;
};

export type PrefecturesResult = SuccessPrefFetch | FailFetch;
