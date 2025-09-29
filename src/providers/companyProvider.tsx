'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface CompanyContextType {
  selectedCompanyName: string;
  setSelectedCompanyName: (companyName: string) => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

interface CompanyProviderProps {
  children: ReactNode;
}

export function CompanyProvider({ children }: CompanyProviderProps) {
  const [selectedCompanyName, setSelectedCompanyName] =
    useState<string>('Acme Corp');

  return (
    <CompanyContext.Provider
      value={{
        selectedCompanyName,
        setSelectedCompanyName,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
}

export function useCompanyContext() {
  const context = useContext(CompanyContext);
  if (context === undefined) {
    throw new Error('useCompanyContext must be used within a CompanyProvider');
  }
  return context;
}
