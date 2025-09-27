import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';

type HeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function Header({ title, description, className }: HeaderProps) {
  return (
    <header className={className}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            {title}
          </h1>
          {description && (
            <p className="text-[var(--foreground)]/60 mt-1">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="2024-q1">
            <option value="2024-q1">2024년 1분기</option>
            <option value="2024-02">2024년 2월</option>
            <option value="2024-03">2024년 3월</option>
          </Select>
          <Button className="h-auto px-4 py-2 whitespace-nowrap">
            <Download className="w-5 h-5 mr-2" />
            다운로드
          </Button>
        </div>
      </div>
    </header>
  );
}
