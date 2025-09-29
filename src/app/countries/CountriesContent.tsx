'use client';

import { Header } from '@/components/layout/header';
import { useCountries, useCompanies } from '@/hooks/useCompany';
import { CountriesList } from '@/components/countries/CountriesList';

export default function CountriesContent() {
  const { data: countries } = useCountries();
  const { data: companies } = useCompanies();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-6 space-y-6">
        <Header
          title="국가별 분석"
          description="국가별 회사 분포 및 탄소 배출량 현황을 확인하세요"
        />

        <CountriesList countries={countries} companies={companies} />
      </div>
    </div>
  );
}
