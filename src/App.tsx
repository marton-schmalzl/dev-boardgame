import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/print.css';
import { PrintModeProvider } from './context/PrintModeContext';
import { AppLayout } from './layout/AppLayout';
import PlayableCardsPage from './pages/PlayableCardsPage';
import AssignmentCardsPage from './pages/AssignmentCardsPage';
import GameBoardPage from './pages/GameBoardPage';
import { employees } from './data/employees';
import { backoffice } from './data/employees';
import { starter } from './data/starter_employees';
import { prestige_employees } from './data/prestige_employees';
import { tecnical_contracts } from './data/tecnical_contracts';
import { functional_contracts } from './data/functional_contracts';
import { runCardDataDevChecks } from './dev/cardDataDevChecks';

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path="/" element={<Navigate to="/playable" replace />} />
      <Route path="/playable" element={<PlayableCardsPage />} />
      <Route path="/assignments" element={<AssignmentCardsPage />} />
      <Route path="/board" element={<GameBoardPage />} />
    </Route>
  </Routes>
);

const App: React.FC = () => {
  useEffect(() => {
    runCardDataDevChecks({
      technologies: tecnical_contracts,
      features: functional_contracts,
      programmers: [
        ...employees,
        ...backoffice,
        ...starter,
        ...prestige_employees,
      ],
    });
  }, []);

  return (
    <BrowserRouter>
      <PrintModeProvider>
        <AppRoutes />
      </PrintModeProvider>
    </BrowserRouter>
  );
};

export default App;
