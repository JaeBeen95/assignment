import { Card } from '@/components/ui/card';
import { Globe, Building2, BarChart3 } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { Country, Company } from '@/types';

type CountryAnalysis = {
  companiesCount: number;
  totalEmissions: number;
  companies: Company[];
};

type CountryCardProps = {
  country: Country;
  analysis: CountryAnalysis;
};

export function CountryCard({ country, analysis }: CountryCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon icon={Globe} className="w-6 h-6 text-[var(--primary)]" />
          <div>
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              {country.name}
            </h3>
            <p className="text-sm text-[var(--foreground)]/60">
              {country.code}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon
              icon={Building2}
              className="w-4 h-4 text-[var(--foreground)]/60"
            />
            <span className="text-sm text-[var(--foreground)]/60">
              등록 회사
            </span>
          </div>
          <span className="font-semibold text-[var(--foreground)]">
            {analysis.companiesCount}개
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon
              icon={BarChart3}
              className="w-4 h-4 text-[var(--foreground)]/60"
            />
            <span className="text-sm text-[var(--foreground)]/60">
              총 배출량
            </span>
          </div>
          <span className="font-semibold text-[var(--foreground)]">
            {analysis.totalEmissions} tCO2
          </span>
        </div>

        {analysis.companies.length > 0 && (
          <div className="pt-3 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--foreground)]/60 mb-2">
              소속 회사:
            </p>
            <div className="space-y-1">
              {analysis.companies.map((company) => (
                <div
                  key={company.id}
                  className="text-sm text-[var(--foreground)] bg-[var(--muted)] px-2 py-1 rounded"
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
