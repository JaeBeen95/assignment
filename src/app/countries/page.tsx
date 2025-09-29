import { Suspense } from 'react';
import { getQueryClient } from '@/lib/queryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchCountries, fetchCompanies } from '@/lib/api';
import CountriesContent from './CountriesContent';
import { DashboardLoading } from '@/components/ui/loading';
import { ErrorBoundary } from '@/components/ui/errorBoundary';

export default async function CountriesPage() {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['countries'],
      queryFn: fetchCountries,
    }),
    queryClient.prefetchQuery({
      queryKey: ['companies'],
      queryFn: fetchCompanies,
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<DashboardLoading />}>
          <CountriesContent />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}
