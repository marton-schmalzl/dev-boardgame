import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PrintModeProvider } from './context/PrintModeContext';
import { AppRoutes } from './App';

test('renders playable cards route', () => {
  render(
    <MemoryRouter initialEntries={['/playable']}>
      <PrintModeProvider>
        <AppRoutes />
      </PrintModeProvider>
    </MemoryRouter>
  );
  expect(
    screen.getByRole('heading', { name: /playable cards/i })
  ).toBeInTheDocument();
});
