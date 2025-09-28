import { Suspense } from 'react';
import { getQueryClient } from '@/lib/queryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchCompanies } from '@/lib/api';
import Dashboard from '@/components/dashboard/Dashboard';
import { DashboardLoading } from '@/components/ui/loading';
import { ErrorBoundary } from '@/components/ui/errorBoundary';

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: fetchCompanies,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary>
        <Suspense fallback={<DashboardLoading />}>
          <Dashboard />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}
