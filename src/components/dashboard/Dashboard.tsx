'use client';

import { Header } from '@/components/layout/header';
import { KPICardsSection } from '@/components/dashboard/KPICardsSection';
import { ChartsSection } from '@/components/dashboard/ChartsSection';
import { EmissionDetailsTable } from '@/components/dashboard/EmissionDetailsTable';
import { useCompanyDashboard } from '@/hooks/useCompany';
import { useCompanyContext } from '@/providers/companyProvider';

export default function Dashboard() {
  const { selectedCompanyName } = useCompanyContext();
  const { data } = useCompanyDashboard(selectedCompanyName);

  const { company, kpiData, emissionBySource, monthlyTrend, totalEmissions } =
    data;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-6 space-y-6">
        <Header
          title={`${selectedCompanyName} 탄소 배출량 대시보드`}
          description={`${selectedCompanyName}의 실시간 탄소 배출량 현황과 분석을 확인하세요`}
        />
        <KPICardsSection data={kpiData} />
        <ChartsSection
          emissionBySource={emissionBySource}
          monthlyTrend={monthlyTrend}
          companyName={selectedCompanyName}
        />
        <EmissionDetailsTable
          emissions={company.emissions}
          companyName={selectedCompanyName}
          totalEmissions={totalEmissions}
        />
      </div>
    </div>
  );
}
