/* eslint-disable react/display-name */
import React from 'react';
import { render, screen } from '@testing-library/react';

import EntryContainer from '.';

const mockData = {
  avatar_url: 'http://avatar.jpj',
  login: 'mock username',
  name: 'mock name',
  description: 'mock description',
  languages_url: 'mock language',
  html_url: 'mock url profile',
  forks_url: 'mcok forks data',
};

jest.mock('../Badges', () => () => <div data-testid="badges" />);
jest.mock('..//Forks', () => () => <div data-testid="forks" />);

describe('EntryContainer', () => {
  it('should render correctly', () => {
    const { container } = render(
      <EntryContainer element={mockData} slug="users" />,
    );

    expect(container.querySelector('.container')).toBeDefined();
    expect(container.querySelector('.avatarImage')).toBeDefined();
    expect(container.querySelector('.username')).toBeDefined();
    expect(container.querySelector('.description')).toBeDefined();
    expect(container.querySelector('.avatarImage')).toBeDefined();
    expect(screen.getByTestId('badges')).toBeDefined();
    expect(screen.getByTestId('forks')).toBeDefined();
    expect(container.querySelector('.goToProfile')).toHaveTextContent(
      'Go to profile',
    );
  });

  it('should render with button text go to repository', () => {
    const { container } = render(
      <EntryContainer element={mockData} slug="repositories" />,
    );

    expect(container.querySelector('.goToProfile')).toHaveTextContent(
      'Go to repository',
    );
  });
});
