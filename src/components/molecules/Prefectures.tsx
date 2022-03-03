import { VFC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Prefecture from 'components/atoms/Prefecture';

const styles = {
  wrap: css({
    display: 'grid',
    gridAutoRows: 'calc(var(--font-size-base) + 8px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(5rem, 1fr))',
    justifyItems: 'center',
    alignItems: 'center',
    marginInline: 'auto',
    listStyle: 'none',
  }),
};

const Prefectures: VFC = () => (
  <ul css={styles.wrap}>
    <Prefecture prefecture={{ prefCode: 1, prefName: '北海道' }} />
  </ul>
);

export default Prefectures;
