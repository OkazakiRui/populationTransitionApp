import { Suspense, VFC } from 'react';

import Chart from 'components/atoms/Chart';
import Title from 'components/atoms/Title';
import Prefectures from 'components/molecules/Prefectures';
import useChartData from 'hooks/useChartData';

const Home: VFC = () => {
  const [chartData] = useChartData();

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
