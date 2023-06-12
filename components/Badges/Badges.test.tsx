import React from 'react';
import { render, waitFor } from '@testing-library/react';

import Badges from '.';

jest.mock('../../utils/fetcher', () => ({
  fetcher: jest.fn().mockResolvedValue({
    java: 1,
    javascript: 1,
  }),
}));

describe('Badges', () => {
  it('should render correctly', async () => {
    const { container } = render(<Badges languagesUrl={'/hello'} />);

    await waitFor(() => {
      expect(container.getElementsByClassName('container')[0]).toBeDefined();
    });
  });
});
