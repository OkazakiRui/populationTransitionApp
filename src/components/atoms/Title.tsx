/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { memo, VFC } from 'react';

type Props = {
  title: string;
};

const styles = {
  h1: css({
    textAlign: 'center',
    fontSize: 'var(--font-size-lrg)',
  }),
  header: css({
    marginBottom: '1rem',
  }),
};

const Title: VFC<Props> = ({ title }) => (
  <header css={styles.header}>
    <h1 css={styles.h1}>{title}</h1>
  </header>
);
export default memo(Title);
