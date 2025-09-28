'use client';

import { Header } from '@/components/layout/header';
import { KPICardsSection } from '@/components/dashboard/KPICardsSection';
import { ChartsSection } from '@/components/dashboard/ChartsSection';
import { EmissionDetailsTable } from '@/components/dashboard/EmissionDetailsTable';

const mockApiData = {
  companies: [
    {
      id: 'c1',
      name: 'Acme Corp',
      country: 'US',
      emissions: [
        { yearMonth: '2024-01', source: 'electricity', emissions: 120 },
        { yearMonth: '2024-02', source: 'electricity', emissions: 110 },
        { yearMonth: '2024-03', source: 'electricity', emissions: 95 },
        { yearMonth: '2024-01', source: 'gasoline', emissions: 45 },
        { yearMonth: '2024-02', source: 'gasoline', emissions: 50 },
        { yearMonth: '2024-03', source: 'gasoline', emissions: 42 },
      ],
    },
    {
      id: 'c2',
      name: 'Globex',
      country: 'DE',
      emissions: [
        { yearMonth: '2024-01', source: 'electricity', emissions: 80 },
        { yearMonth: '2024-02', source: 'electricity', emissions: 105 },
        { yearMonth: '2024-03', source: 'electricity', emissions: 120 },
        { yearMonth: '2024-01', source: 'diesel', emissions: 35 },
        { yearMonth: '2024-02', source: 'diesel', emissions: 40 },
        { yearMonth: '2024-03', source: 'diesel', emissions: 38 },
      ],
    },
  ],
  countries: [
    { code: 'US', name: 'United States' },
    { code: 'DE', name: 'Germany' },
  ],
};

export default function Home() {
  const acmeData = mockApiData.companies.find((c) => c.name === 'Acme Corp');
  const companyName = 'Acme Corp';

  const kpiData = {
    totalEmissions: '462 tCO2',
    currentMonth: '137 tCO2',
    monthlyTrend: '-14.4% vs 전월',
    targetAchievement: '68.4%',
    mainSource: '전기',
    sourcePercentage: '70.3% 비중',
  };

  const emissionBySource = {
    labels: ['전기', '휘발유'],
    values: [325, 137],
  };

  const monthlyTrend = {
    labels: ['1월', '2월', '3월'],
    datasets: [
      {
        label: 'Acme Corp 총 배출량',
        data: [165, 160, 137],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-6 space-y-6">
        <Header
          title="Acme Corp 탄소 배출량 대시보드"
          description="Acme Corp의 실시간 탄소 배출량 현황과 분석을 확인하세요"
        />
        <KPICardsSection data={kpiData} />
        <ChartsSection
          emissionBySource={emissionBySource}
          monthlyTrend={monthlyTrend}
          companyName={companyName}
        />
        <EmissionDetailsTable
          emissions={acmeData?.emissions || []}
          companyName={companyName}
          totalEmissions={462}
        />
      </div>
    </div>
  );
}
