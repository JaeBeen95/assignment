import { Suspense } from 'react';
import { getQueryClient } from '@/lib/queryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchPosts, fetchCompanies } from '@/lib/api';
import ReportDetailContent from './ReportDetailContent';
import { DashboardLoading } from '@/components/ui/loading';
import { ErrorBoundary } from '@/components/ui/errorBoundary';

type ReportDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function ReportDetailPage({
  params,
}: ReportDetailPageProps) {
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
          <ReportDetailContent id={params.id} />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
}
