'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type BarChartData = {
  labels: string[];
  values: number[];
  colors?: string[];
};

type BarChartProps = {
  data: BarChartData;
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

export function BarChart({
  data,
  title = '배출원별 분석',
  className,
}: BarChartProps) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: '배출량',
        data: data.values,
        backgroundColor: data.colors || [
          CHART_COLORS.primary,
          CHART_COLORS.secondary,
          CHART_COLORS.tertiary,
          CHART_COLORS.chart4,
          CHART_COLORS.chart5,
        ],
        borderRadius: 4,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.parsed.y.toLocaleString()} tCO2`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${Number(value).toLocaleString()} tCO2`,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="h-64">
          <Bar data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
