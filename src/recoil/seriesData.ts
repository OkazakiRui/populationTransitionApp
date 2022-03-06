import { atomFamily, selectorFamily } from 'recoil';

import apiClient from 'library/apiClient';
import { PopulationResult } from 'types/population';
import { SeriesData } from 'types/series';

// グラフに描画するデータのキャッシュを保存します
export const seriesCacheAtom = atomFamily<SeriesData | null, number>({
  key: 'seriesAtom',
  default: null,
});

const seriesSelector = selectorFamily<
  SeriesData,
  { prefName: string; prefCode: number }
>({
  key: 'seriesSelector',
  get:
    ({ prefName, prefCode }) =>
    async ({ get }) => {
      // キャッシュにデータがある場合はキャッシュを返します
      const currentValue = get(seriesCacheAtom(prefCode));
      if (currentValue) return currentValue;

      const { data } = await apiClient.get<PopulationResult>(
        '/population/composition/perYear',
        {
          params: { prefCode },
        },
      );

      // 各年代の総人口を配列にします
      const totalPopulation = // eslint-disable-line operator-linebreak
        data.message === null
          ? data.result.data[0].data.map((dt) => dt.value)
          : [0];

      // グラフに描画するデータを作って返します。
      const series: SeriesData = {
        data: totalPopulation,
        name: prefName,
      };

      return series;
    },
});
export default seriesSelector;
