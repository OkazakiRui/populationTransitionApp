/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo, useState, VFC } from 'react';

import PrefectureFetch from 'components/atoms/PrefectureFetch';
import { Prefecture as TypePrefecture } from 'types/prefecture';
import { SeriesData } from 'types/series';

const styles = {
  label: css({
    fontSize: 'var(--font-size-base)',
    cursor: 'pointer',
  }),
  input: css({
    marginRight: '4px',
    cursor: 'pointer',
  }),
  item: css({
    flex: 1,
    minWidth: 'fit-content',
  }),
};

type Props = {
  prefecture: TypePrefecture;
  addChartData: (series: SeriesData) => void;
  removeChartData: (prefName: string) => void;
};

const Prefecture: VFC<Props> = ({
  prefecture,
  addChartData,
  removeChartData,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  /**
   * input:checkbox が更新されるとグラフのデータが更新される
   * @date 2022-03-05
   * @returns {void}
   */
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li css={styles.item}>
      <label htmlFor={String(prefecture.prefCode)} css={styles.label}>
        <input
          type="checkbox"
          id={String(prefecture.prefCode)}
          checked={isChecked}
          onChange={checkHandler}
          css={styles.input}
        />
        {prefecture.prefName}
      </label>
      {isChecked && (
        <PrefectureFetch
          prefecture={prefecture}
          addChartData={addChartData}
          removeChartData={removeChartData}
        />
      )}
    </li>
  );
};

export default memo(Prefecture);
