import DefaultProps from '@/typings/DefaultProps';
import React, { Dispatch, SetStateAction } from 'react';

import styles from './ToggleInput.module.scss';
import Logo from '../Logo';

interface IToggleInput extends DefaultProps {
  options: string[];
  selectedOption: string;
  setOption: Dispatch<SetStateAction<string>>;
}

const ToggleInput = ({
  options,
  selectedOption,
  setOption,
  ...restprops
}: IToggleInput) => {
  return (
    <div className={styles.container} {...restprops}>
      {options.map((option) => (
        <button
          key={option}
          data-testid={option}
          className={styles.toggleButton}
          onClick={(e) => {
            e.preventDefault();
            setOption(option);
          }}>
          {selectedOption === option && (
            <Logo
              className={styles.checkBoxLogo}
              srcLogo={'/checkmark.svg'}
            />
          )}
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleInput;
