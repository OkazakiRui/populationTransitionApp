import { Suspense, useState, VFC } from 'react';

import Chart from 'components/atoms/Chart';
import Title from 'components/atoms/Title';
import Prefectures from 'components/molecules/Prefectures';
import { SeriesData } from 'types/series';

const Home: VFC = () => {
  // chartに表示するデータを保持
  const [chartData, setChartData] = useState<SeriesData[]>([]);

  return (
    <>
      <Title title="都道府県別総人口推移グラフ" />
      <Suspense fallback={<>loading...</>}>
        <Prefectures />
        <Chart chartData={chartData} />
      </Suspense>
    </>
  );
};

export default Home;
