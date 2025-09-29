import { Suspense } from 'react';
import { getQueryClient } from '@/lib/queryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchPosts, fetchCompanies } from '@/lib/api';
import ReportsContent from './ReportsContent';
import { DashboardLoading } from '@/components/ui/loading';
import { ErrorBoundary } from '@/components/ui/errorBoundary';

export default async function ReportsPage() {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts,
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
          <ReportsContent />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}
