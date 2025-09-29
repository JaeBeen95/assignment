import { Loader2 } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function Loading({
  size = 'md',
  text = '로딩 중...',
  className = '',
}: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <Icon
        icon={Loader2}
        className={`${sizeClasses[size]} animate-spin text-[var(--foreground)]/60`}
      />
      <p className="text-[var(--foreground)]/60 text-sm">{text}</p>
    </div>
  );
}

export function DashboardLoading() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <Loading size="lg" text="대시보드를 불러오는 중..." className="py-20" />
    </div>
  );
}
