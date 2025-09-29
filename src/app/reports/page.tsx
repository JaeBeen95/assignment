import { Suspense } from 'react';
import { getQueryClient } from '@/lib/queryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchPosts } from '@/lib/api';
import ReportsContent from './reports-content';
import { DashboardLoading } from '@/components/ui/loading';
import { ErrorBoundary } from '@/components/ui/errorBoundary';

export default async function ReportsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

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
