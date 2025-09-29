import { Card } from '@/components/ui/card';
import { FileText, Calendar, Building2 } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { Post } from '@/types';

type ReportCardProps = {
  post: Post;
  companyName: string;
};

export function ReportCard({ post, companyName }: ReportCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Icon icon={FileText} className="w-5 h-5 text-[var(--primary)]" />
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              {post.title}
            </h3>
          </div>

          <p className="text-[var(--foreground)]/70 mb-4">{post.content}</p>

          <div className="flex items-center gap-4 text-sm text-[var(--foreground)]/60">
            <div className="flex items-center gap-2">
              <Icon icon={Building2} className="w-4 h-4" />
              <span>{companyName}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon={Calendar} className="w-4 h-4" />
              <span>{post.dateTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
