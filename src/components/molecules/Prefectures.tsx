/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useState,
  VFC,
} from 'react';

import Prefecture from 'components/atoms/Prefecture';
import apiClient from 'library/apiClient';
import { PrefecturesResult } from 'types/prefecture';
import { SeriesData } from 'types/series';

const styles = {
  wrap: css({
    width: '100%',
    display: 'grid',
    gridAutoRows: 'calc(var(--font-size-base) + 8px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(6rem, 1fr))',
    justifyItems: 'center',
    alignItems: 'center',
    marginInline: 'auto',
    listStyle: 'none',
    order: 1,
  }),
};

/**
 * stateのsetterを受け取り、都道府県一覧を格納する
 * @date 2022-03-06
 * @param {Dispatch<SetStateAction<PrefecturesResult | undefined>>} setPrefectures
 * @returns {void}
 */
const getPrefectures = (
  setPrefectures: Dispatch<SetStateAction<PrefecturesResult | undefined>>,
) => {
  apiClient
    .get<PrefecturesResult>('/prefectures')
    .then(({ data }) => {
      // 値が正しく取得できなかった場合はエラーを投げる
      if (data.message) throw new Error(data.message);

      setPrefectures(data);
    })
    .catch((error) => {
      console.error(error);
    });
};

type Props = {
  addChartData: (series: SeriesData) => void;
  removeChartData: (prefName: string) => void;
};

const Prefectures: VFC<Props> = ({ addChartData, removeChartData }) => {
  const [prefectures, setPrefectures] = useState<PrefecturesResult>();
  useEffect(() => {
    getPrefectures(setPrefectures);
  }, []);

  return (
    <ul css={styles.wrap}>
      {prefectures !== undefined && prefectures.message == null
        ? prefectures.result.map((prefectureData) => (
            <Prefecture
              prefecture={prefectureData}
              addChartData={addChartData}
              removeChartData={removeChartData}
              key={String(prefectureData.prefCode)}
            />
          ))
        : null}
    </ul>
  );
};

export default memo(Prefectures);
