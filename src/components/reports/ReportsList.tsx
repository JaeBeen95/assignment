import { Post } from '@/types';
import { ReportCard } from './ReportCard';
import { EmptyReports } from './EmptyReports';

type ReportsListProps = {
  posts: Post[];
  companyNameMap: Map<string, string> | undefined;
};

export function ReportsList({ posts, companyNameMap }: ReportsListProps) {
  if (!posts || posts.length === 0) {
    return <EmptyReports />;
  }

  return (
    <div className="grid gap-4">
      {posts.map((post) => {
        const companyName =
          companyNameMap?.get(post.resourceUid) || '알 수 없는 회사';
        return (
          <ReportCard key={post.id} post={post} companyName={companyName} />
        );
      })}
    </div>
  );
}
