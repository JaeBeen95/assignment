import Link from 'next/link';
import {
  Home,
  Building2,
  BarChart3,
  FileText,
  Settings,
  Leaf,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const navigation = [
  { name: '대시보드', href: '/', icon: Home, current: true },
  { name: '회사관리', href: '/companies', icon: Building2, current: false },
  { name: '배출데이터', href: '/emissions', icon: BarChart3, current: false },
  { name: '보고서', href: '/reports', icon: FileText, current: false },
  { name: '시스템관리', href: '/settings', icon: Settings, current: false },
];

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full w-64 bg-[var(--card)] border-r border-[var(--border)] z-10',
        className
      )}
    >
      <div className="p-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-[var(--primary-foreground)]" />
          </div>
          <span className="font-bold text-lg text-[var(--foreground)]">
            hana.eco
          </span>
        </div>
      </div>
      <nav className="p-4">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-[var(--radius-card)] transition-colors',
                    item.current
                      ? 'bg-[var(--primary)]/10 text-[var(--primary)] font-semibold'
                      : 'hover:bg-[var(--secondary)] text-[var(--foreground)]'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                  {item.current && (
                    <Badge variant="default" className="ml-auto">
                      현재
                    </Badge>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
