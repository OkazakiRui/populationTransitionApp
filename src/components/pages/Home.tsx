/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Suspense, VFC } from 'react';
import { Helmet } from 'react-helmet';

import Chart from 'components/atoms/Chart';
import Loading from 'components/atoms/Loading';
import Title from 'components/atoms/Title';
import Prefectures from 'components/molecules/Prefectures';
import useChartData from 'hooks/useChartData';

const styles = {
  wrap: css({
    display: 'flex',
    flexDirection: 'column',
  }),
};

const Home: VFC = () => {
  const [chartData, addChartData, removeChartData] = useChartData();

  return (
    <div css={styles.wrap}>
      <Helmet>
        <title>都道府県別総人口推移グラフ</title>
      </Helmet>
      <Title title="都道府県別総人口推移グラフ" />
      <Suspense fallback={<Loading />}>
        <Prefectures
          addChartData={addChartData}
          removeChartData={removeChartData}
        />
        <Chart chartData={chartData} />
      </Suspense>
    </div>
  );
};

export default Home;
