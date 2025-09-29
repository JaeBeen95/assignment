import { usePosts } from './useCompany';

export function useReportDetail(id: string) {
  const { data: posts, ...rest } = usePosts();

  const post = posts?.find((p) => p.id === id);

  return {
    data: post,
    isNotFound: posts && !post,
    ...rest,
  };
}
