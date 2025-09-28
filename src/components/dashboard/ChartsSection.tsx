import { DonutChart } from '@/components/charts/DonutChart';
import { LineChart } from '@/components/charts/LineChart';

type EmissionBySourceData = {
  labels: string[];
  values: number[];
};

type MonthlyTrendData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
  }[];
};

type ChartsSectionProps = {
  emissionBySource: EmissionBySourceData;
  monthlyTrend: MonthlyTrendData;
  companyName: string;
};

export function ChartsSection({
  emissionBySource,
  monthlyTrend,
  companyName,
}: ChartsSectionProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <DonutChart
        data={emissionBySource}
        title={`${companyName} 배출원별 구성비`}
      />
      <LineChart
        data={monthlyTrend}
        title={`${companyName} 월별 배출량 추이 (2024년)`}
      />
    </section>
  );
}
