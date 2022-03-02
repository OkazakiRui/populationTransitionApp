import { memo, VFC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  title: string;
};

const styles = {
  h1: css({
    textAlign: 'center',
    fontSize: 'var(--font-size-lrg)',
  }),
};

const Title: VFC<Props> = ({ title }) => (
  <header>
    <h1 css={styles.h1}>{title}</h1>
  </header>
);
export default memo(Title);
