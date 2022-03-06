import { Suspense, VFC } from 'react';

import Chart from 'components/atoms/Chart';
import Loading from 'components/atoms/Loading';
import Title from 'components/atoms/Title';
import Prefectures from 'components/molecules/Prefectures';
import useChartData from 'hooks/useChartData';

const Home: VFC = () => {
  const [chartData, addChartData, removeChartData] = useChartData();

  return (
    <>
      <Title title="都道府県別総人口推移グラフ" />
      <Suspense fallback={<Loading />}>
        <Prefectures
          addChartData={addChartData}
          removeChartData={removeChartData}
        />
        <Chart chartData={chartData} />
      </Suspense>
    </>
  );
};

export default Home;
