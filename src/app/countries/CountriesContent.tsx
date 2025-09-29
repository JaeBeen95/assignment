'use client';

import { Header } from '@/components/layout/header';
import { Card } from '@/components/ui/card';
import { useCountries, useCompanies } from '@/hooks/useCompany';
import { Globe, Building2, BarChart3 } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

export default function CountriesContent() {
  const { data: countries } = useCountries();
  const { data: companies } = useCompanies();

  const getCountryAnalysis = (countryCode: string) => {
    const countryCompanies =
      companies?.filter((company) => company.country === countryCode) || [];
    const totalEmissions = countryCompanies.reduce((total, company) => {
      return (
        total +
        company.emissions.reduce((sum, emission) => sum + emission.emissions, 0)
      );
    }, 0);

    return {
      companiesCount: countryCompanies.length,
      totalEmissions,
      companies: countryCompanies,
    };
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-6 space-y-6">
        <Header
          title="국가별 분석"
          description="국가별 회사 분포 및 탄소 배출량 현황을 확인하세요"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => {
            const analysis = getCountryAnalysis(country.code);

            return (
              <Card key={country.code} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon
                      icon={Globe}
                      className="w-6 h-6 text-[var(--primary)]"
                    />
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
          })}
        </div>

        {(!countries || countries.length === 0) && (
          <Card className="p-8 text-center">
            <Icon
              icon={Globe}
              className="w-12 h-12 text-[var(--foreground)]/40 mx-auto mb-4"
            />
            <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
              국가 데이터가 없습니다
            </h3>
            <p className="text-[var(--foreground)]/60">
              아직 등록된 국가 정보가 없습니다.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
