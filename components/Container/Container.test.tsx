import React from 'react';
import { render } from '@testing-library/react';

import Container from '.';

describe('Container', () => {
  it('should render correctly', () => {
    const { container } = render(<Container />);

    expect(container.querySelector('.container')).toBeDefined();
    expect(container.children.length).toBe(1);
  });

  it('should render correctly with children', () => {
    const { container } = render(
      <Container>
        <div className="children" />
      </Container>,
    );

    expect(container.querySelector('.children')).toBeDefined();
  });
});
