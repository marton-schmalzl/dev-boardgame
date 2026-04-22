import React, { createContext, useCallback, useContext, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

type PrintModeContextValue = {
  printMode: boolean;
  setPrintMode: (next: boolean) => void;
  togglePrintMode: () => void;
};

const PrintModeContext = createContext<PrintModeContextValue | null>(null);

const PRINT_PARAM = 'print';

export const PrintModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const printMode = searchParams.get(PRINT_PARAM) === '1';

  const setPrintMode = useCallback(
    (next: boolean) => {
      setSearchParams(
        (prev) => {
          const p = new URLSearchParams(prev);
          if (next) p.set(PRINT_PARAM, '1');
          else p.delete(PRINT_PARAM);
          return p;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  const togglePrintMode = useCallback(() => {
    setPrintMode(!printMode);
  }, [printMode, setPrintMode]);

  useEffect(() => {
    document.documentElement.classList.toggle('app-print-preview', printMode);
    return () => {
      document.documentElement.classList.remove('app-print-preview');
    };
  }, [printMode]);

  const value = useMemo(
    () => ({ printMode, setPrintMode, togglePrintMode }),
    [printMode, setPrintMode, togglePrintMode]
  );

  return (
    <PrintModeContext.Provider value={value}>
      {children}
    </PrintModeContext.Provider>
  );
};

export function usePrintMode(): PrintModeContextValue {
  const ctx = useContext(PrintModeContext);
  if (!ctx) {
    throw new Error('usePrintMode must be used within PrintModeProvider');
  }
  return ctx;
}
