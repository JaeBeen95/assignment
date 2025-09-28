'use client';

import QueryProvider from './queryProvider';
import { CompanyProvider } from './companyProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryProvider>
      <CompanyProvider>{children}</CompanyProvider>
    </QueryProvider>
  );
}
