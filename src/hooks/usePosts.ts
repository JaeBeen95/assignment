import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, createOrUpdatePost } from '@/lib/api';

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
}

export function useCreateOrUpdatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrUpdatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
}
