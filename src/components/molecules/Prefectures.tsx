/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { VFC } from 'react';
import { useRecoilValue } from 'recoil';

import Prefecture from 'components/atoms/Prefecture';
import prefecturesSelector from 'recoil/prefectures';
import { PrefecturesResult } from 'types/prefecture';

const styles = {
  wrap: css({
    display: 'grid',
    gridAutoRows: 'calc(var(--font-size-base) + 8px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(6rem, 1fr))',
    justifyItems: 'center',
    alignItems: 'center',
    marginInline: 'auto',
    listStyle: 'none',
  }),
};

const Prefectures: VFC = () => {
  const data: PrefecturesResult = useRecoilValue(prefecturesSelector);

  return (
    <ul css={styles.wrap}>
      {data.message === null
        ? data.result.map((prefectureData) => (
            <Prefecture
              prefecture={prefectureData}
              key={String(prefectureData.prefCode)}
            />
          ))
        : 'データの取得に失敗しました'}
    </ul>
  );
};

export default Prefectures;
