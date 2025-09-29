import { Home, FileText, Globe, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/icon';

const navigation = [
  { name: '대시보드', href: '/', icon: Home, current: true },
  { name: '보고서', href: '/reports', icon: FileText, current: false },
  { name: '국가별 분석', href: '/countries', icon: Globe, current: false },
];

export function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-[var(--card)] border-r border-[var(--border)] flex flex-col">
      <div className="p-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
            <Icon
              icon={Leaf}
              className="w-5 h-5 text-[var(--primary-foreground)]"
            />
          </div>
          <span className="font-bold text-lg text-[var(--foreground)]">
            hanaloop
          </span>
        </div>
      </div>
      <nav className="p-4 flex-1">
        <ul className="space-y-1">
          {navigation.map((item) => (
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
                <Icon icon={item.icon} className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
