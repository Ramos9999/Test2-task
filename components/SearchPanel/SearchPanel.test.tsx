import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchPanel from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {},
    push: jest.fn(),
  }),
}));

describe('SearchPanel', () => {
  it('should render correctly', () => {
    const { container } = render(<SearchPanel placeHolder={''} />);

    expect(container.getElementsByClassName('container')[0]).toBeDefined();
    expect(container.getElementsByClassName('searchForm')[0]).toBeDefined();
    expect(container.getElementsByClassName('searchInput')[0]).toBeDefined();
    expect(container.getElementsByClassName('searchSubmit')[0]).toBeDefined();
  });

  it('should change the value of input when is changed', () => {
    render(<SearchPanel placeHolder={''} />);

    const input = screen.getByTestId('input-search');

    fireEvent.change(input, {
      target: { value: 'mcok value' },
    });

    fireEvent.click(screen.getByTestId('submit'));

    expect(input.getAttribute('value')).toBe('mcok value');
  });
});
