import {
  Home,
  Building2,
  BarChart3,
  FileText,
  Settings,
  Leaf,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: '대시보드', href: '/', icon: Home, current: true },
  { name: '회사관리', href: '/companies', icon: Building2, current: false },
  { name: '배출데이터', href: '/emissions', icon: BarChart3, current: false },
  { name: '보고서', href: '/reports', icon: FileText, current: false },
  { name: '시스템관리', href: '/settings', icon: Settings, current: false },
];

export function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-[var(--card)] border-r border-[var(--border)] flex flex-col">
      <div className="p-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-[var(--primary-foreground)]" />
          </div>
          <span className="font-bold text-lg text-[var(--foreground)]">
            hanaloop
          </span>
        </div>
      </div>
      <nav className="p-4 flex-1">
        <ul className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
                    item.current
                      ? 'bg-[var(--secondary)] text-[var(--primary)] font-semibold'
                      : 'hover:bg-[var(--secondary)]/50 text-[var(--foreground)]'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
