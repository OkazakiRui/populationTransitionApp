import { useEffect, VFC } from 'react';
import { useRecoilValue } from 'recoil';

import seriesSelector from 'recoil/seriesData';
import { Prefecture as TypePrefecture } from 'types/prefecture';
import { SeriesData } from 'types/series';

type Props = {
  prefecture: TypePrefecture;
  addChartData: (series: SeriesData) => void;
  removeChartData: (prefName: string) => void;
};
const PrefectureFetch: VFC<Props> = ({
  prefecture,
  addChartData,
  removeChartData,
}) => {
  const series = useRecoilValue(seriesSelector(prefecture));
  useEffect(() => {
    addChartData(series);

    return () => removeChartData(series.name);
  }, []);

  return <></>; // eslint-disable-line react/jsx-no-useless-fragment
};

export default PrefectureFetch;
