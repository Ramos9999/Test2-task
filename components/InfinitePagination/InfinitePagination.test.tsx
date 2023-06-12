import React from 'react';
import { render } from '@testing-library/react';

import InfinitePagination from '.';

jest.mock('../../utils/fetcher.ts', () => ({
  recordFetcher: jest
    .fn()
    .mockReturnValue(new Promise((resolve) => resolve([]))),
}));

describe('InfinitePagination', () => {
  it('should render correctly', () => {
    const { container } = render(
      <InfinitePagination
        searchResult={[{}]}
        setData={function (value: React.SetStateAction<[]>): void {
          throw new Error('Function not implemented.');
        }}
        slug={''}
        query={''}
      />,
    );

    expect(container.querySelector('.container')).toBeDefined();
  });
});
