'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

Chart.register(ArcElement, Tooltip, Legend);

type DonutChartData = {
  labels: string[];
  values: number[];
  colors?: string[];
};

type DonutChartProps = {
  data: DonutChartData;
  title?: string;
  className?: string;
};

const CHART_COLORS = {
  primary: 'oklch(0.55 0.22 259.75)',
  secondary: 'oklch(0.65 0.2 259.75)',
  tertiary: 'oklch(0.75 0.18 259.75)',
  chart4: 'oklch(0.72 0.15 184.7)',
  chart5: 'oklch(0.7 0.21 133.6)',
};

export function DonutChart({
  data,
  title = '배출량 구성',
  className,
}: DonutChartProps) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors || [
          CHART_COLORS.primary,
          CHART_COLORS.secondary,
          CHART_COLORS.tertiary,
          CHART_COLORS.chart4,
          CHART_COLORS.chart5,
        ],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return ` ${context.label}: ${context.parsed.toLocaleString()} tCO2`;
          },
        },
      },
    },
    cutout: '70%',
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-64">
          <Doughnut data={chartData} options={options} />
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {data.labels.map((label, index) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded"
                style={{
                  backgroundColor:
                    data.colors?.[index] ||
                    [
                      CHART_COLORS.primary,
                      CHART_COLORS.secondary,
                      CHART_COLORS.tertiary,
                      CHART_COLORS.chart4,
                      CHART_COLORS.chart5,
                    ][index],
                }}
              />
              <span className="text-sm text-[var(--foreground)]/60">
                {label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
