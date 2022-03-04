import { Suspense, VFC } from 'react';

import Title from 'components/atoms/Title';
import Prefectures from 'components/molecules/Prefectures';

const Home: VFC = () => (
  <>
    <Title title="都道府県別総人口推移グラフ" />
    <Suspense fallback={<>loading...</>}>
      <Prefectures />
    </Suspense>
  </>
);

export default Home;
