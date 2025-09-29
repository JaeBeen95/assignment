import { Card } from '@/components/ui/card';
import { FileText, Calendar, Building2, ChevronRight } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { Post } from '@/types';
import Link from 'next/link';

type ReportCardProps = {
  post: Post;
  companyName: string;
};

export function ReportCard({ post, companyName }: ReportCardProps) {
  return (
    <Link href={`/reports/${post.id}`}>
      <Card className="p-6 cursor-pointer hover:bg-[var(--muted)]/50 transition-colors">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Icon icon={FileText} className="w-5 h-5 text-[var(--primary)]" />
              <h3 className="text-lg font-semibold text-[var(--foreground)] line-clamp-2">
                {post.title}
              </h3>
            </div>

            <p className="text-[var(--foreground)]/70 mb-4 line-clamp-3">
              {post.content}
            </p>

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

          <Icon
            icon={ChevronRight}
            className="w-5 h-5 text-[var(--foreground)]/40 ml-4 flex-shrink-0"
          />
        </div>
      </Card>
    </Link>
  );
}
