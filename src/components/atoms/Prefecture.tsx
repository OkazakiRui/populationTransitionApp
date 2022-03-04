/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, VFC } from 'react';

import { Prefecture as TypePrefecture } from 'types/prefecture';

type Props = {
  prefecture: TypePrefecture;
  selected?: () => void;
};

const styles = {
  label: css({
    fontSize: 'var(--font-size-base)',
  }),
  input: css({
    marginRight: '4px',
  }),
  item: css({
    flex: 1,
    minWidth: 'fit-content',
  }),
};

const Prefecture: VFC<Props> = ({ prefecture }) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => setIsChecked(!isChecked);

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
    </li>
  );
};

export default Prefecture;
