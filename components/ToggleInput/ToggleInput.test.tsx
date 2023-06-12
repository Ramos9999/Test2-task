import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ToggleInput from '.';

describe('ToggleInput', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ToggleInput
        options={['users']}
        selectedOption={''}
        setOption={function (value: React.SetStateAction<string>): void {
          console.log(value);
        }}
      />,
    );

    expect(container.getElementsByClassName('container')[0]).toBeDefined();
    expect(container.getElementsByClassName('toggleButton')[0]).toBeDefined();
    expect(container.getElementsByClassName('checkBoxLogo')[0]).toBeUndefined();
  });

  it('should render correctly and be clickable', () => {
    console.log = jest.fn();
    const { container } = render(
      <ToggleInput
        options={['users']}
        selectedOption={'users'}
        setOption={function (value: React.SetStateAction<string>): void {
          console.log(value);
        }}
      />,
    );

    fireEvent.click(screen.getByTestId('users'));
    expect(container.getElementsByClassName('checkBoxLogo')[0]).toBeDefined();
    expect(console.log).toBeCalled();
  });
});
