/** @jsxImportSource @emotion/react */
import { css, keyframes, SerializedStyles } from '@emotion/react';
import { VFC } from 'react';

const animations = {
  loading: keyframes({
    '0%': { top: '0px', backgroundColor: 'white' },
    '20%': { top: '-15px' },
    '40%': { top: '0px' },
    '60%': { top: -'15px' },
    '100%': { top: '0px' },
  }),
};

const styles = {
  wrap: css({
    position: 'fixed',
    inset: '0',
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  }),
  item: (number: number): SerializedStyles =>
    css({
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      position: 'relative',
      animation: `${animations.loading} 1s 0.${number}s infinite`,
    }),
};

const Loading: VFC = () => (
  <div css={styles.wrap}>
    {[...Array(3)] // eslint-disable-line @typescript-eslint/no-unsafe-assignment
      .map((_, i) => i)
      .map((num) => (
        <div key={num} css={styles.item(num)} />
      ))}
  </div>
);

export default Loading;
