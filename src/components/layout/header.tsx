import { Download, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Icon } from '@/components/ui/icon';
import { useCompanies } from '@/hooks/useCompany';
import { useCompanyContext } from '@/providers/companyProvider';

type HeaderProps = {
  title: string;
  description?: string;
  className?: string;
};

export function Header({ title, description, className }: HeaderProps) {
  const { data: companies } = useCompanies();
  const { selectedCompanyName, setSelectedCompanyName } = useCompanyContext();

  return (
    <header className={className}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              {title}
            </h1>
            {description && (
              <p className="text-[var(--foreground)]/60 mt-1">{description}</p>
            )}
          </div>

          <div className="flex items-center gap-2 pl-4 border-l border-[var(--border)]">
            <Icon
              icon={Building2}
              className="w-4 h-4 text-[var(--foreground)]/60"
            />
            <Select
              value={selectedCompanyName}
              onChange={(e) => setSelectedCompanyName(e.target.value)}
              className="w-32"
            >
              {companies?.map((company) => (
                <option key={company.id} value={company.name}>
                  {company.name}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Select defaultValue="2024-q1">
            <option value="2024-q1">2024년 1분기</option>
            <option value="2024-02">2024년 2월</option>
            <option value="2024-03">2024년 3월</option>
          </Select>
          <Button className="h-auto px-4 py-2 whitespace-nowrap">
            <Icon icon={Download} className="w-5 h-5 mr-2" />
            다운로드
          </Button>
        </div>
      </div>
    </header>
  );
}
