'use client';

import { Header } from '@/components/layout/header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { DonutChart } from '@/components/charts/DonutChart';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { TrendingUp, TrendingDown, Building2, Target } from 'lucide-react';

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
  const emissionBySource = {
    labels: ['Electricity', 'Gasoline', 'Diesel'],
    values: [315, 137, 113],
  };

  const monthlyTrend = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Total Emissions',
        data: [280, 305, 295],
      },
    ],
  };

  const companyComparison = {
    labels: ['Acme Corp', 'Globex'],
    values: [352, 378],
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-6 space-y-6">
        <Header
          title="탄소 배출량 대시보드"
          description="실시간 탄소 배출량 현황과 분석을 확인하세요"
        />

        {/* KPI 카드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[var(--foreground)]/60">
                총 배출량
              </CardTitle>
              <Building2 className="h-4 w-4 text-[var(--foreground)]/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">730 tCO2</div>
              <div className="flex items-center space-x-2 text-xs text-[var(--foreground)]/60">
                <TrendingUp className="h-4 w-4 text-[var(--success)]" />
                <span>+2.1% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[var(--foreground)]/60">
                이번 달 배출량
              </CardTitle>
              <Target className="h-4 w-4 text-[var(--foreground)]/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">295 tCO2</div>
              <div className="flex items-center space-x-2 text-xs text-[var(--foreground)]/60">
                <TrendingDown className="h-4 w-4 text-[var(--destructive)]" />
                <span>-3.3% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[var(--foreground)]/60">
                연간 목표 달성률
              </CardTitle>
              <Target className="h-4 w-4 text-[var(--foreground)]/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68.4%</div>
              <div className="flex items-center space-x-2">
                <Badge variant="success">목표 달성</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[var(--foreground)]/60">
                등록된 회사
              </CardTitle>
              <Building2 className="h-4 w-4 text-[var(--foreground)]/60" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <div className="flex items-center space-x-2 text-xs text-[var(--foreground)]/60">
                <span>Active companies</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 차트 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DonutChart data={emissionBySource} title="배출원별 구성비" />
          <BarChart data={companyComparison} title="사업장별 배출량" />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <LineChart data={monthlyTrend} title="월별 배출량 추이 (2024년)" />
        </div>

        {/* 회사 목록 테이블 */}
        <Card>
          <CardHeader>
            <CardTitle>회사별 배출량 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>회사명</TableHead>
                  <TableHead>국가</TableHead>
                  <TableHead className="text-right">이번 달 배출량</TableHead>
                  <TableHead className="text-right">전월 대비</TableHead>
                  <TableHead className="text-center">상태</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockApiData.companies.map((company) => {
                  const country = mockApiData.countries.find(
                    (c) => c.code === company.country
                  );
                  const march = company.emissions
                    .filter((e) => e.yearMonth === '2024-03')
                    .reduce((sum, e) => sum + e.emissions, 0);
                  const feb = company.emissions
                    .filter((e) => e.yearMonth === '2024-02')
                    .reduce((sum, e) => sum + e.emissions, 0);
                  const change = ((march - feb) / feb) * 100;

                  return (
                    <TableRow key={company.id}>
                      <TableCell className="font-medium">
                        {company.name}
                      </TableCell>
                      <TableCell className="text-[var(--foreground)]/60">
                        {country?.name}
                      </TableCell>
                      <TableCell className="text-right">{march} tCO2</TableCell>
                      <TableCell
                        className={`text-right ${change > 0 ? 'text-[var(--success)]' : 'text-[var(--destructive)]'}`}
                      >
                        {change > 0 ? '+' : ''}
                        {change.toFixed(1)}%
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant={
                            Math.abs(change) > 10 ? 'warning' : 'success'
                          }
                        >
                          {Math.abs(change) > 10 ? 'Watch' : 'Normal'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
