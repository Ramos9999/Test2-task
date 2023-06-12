import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Forks from '.';

jest.mock('../../utils/fetcher', () => ({
  fetcher: jest.fn().mockResolvedValue([
    {
      full_name: 'mock name',
    },
  ]),
}));

describe('Badges', () => {
  it('should render correctly', async () => {
    const { container } = render(
      <Forks forkUrl={'htpp://www.api.github.mock'} />,
    );

    await waitFor(() => {
      expect(container.getElementsByClassName('container')[0]).toBeDefined();
    });
  });
});
