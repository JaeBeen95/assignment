'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from 'chart.js';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type LineChartDataset = {
  label: string;
  data: number[];
  color?: string;
};

type LineChartData = {
  labels: string[];
  datasets: LineChartDataset[];
};

type LineChartProps = {
  data: LineChartData;
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

const CHART_COLORS_RGBA = {
  primary: 'rgba(22, 119, 255, 0.1)',
  secondary: 'rgba(64, 150, 255, 0.1)',
  tertiary: 'rgba(105, 180, 255, 0.1)',
  chart4: 'rgba(19, 194, 194, 0.1)',
  chart5: 'rgba(82, 196, 26, 0.1)',
};

export function LineChart({
  data,
  title = '월별 배출량 추이',
  className,
}: LineChartProps) {
  const defaultColors = [
    CHART_COLORS.primary,
    CHART_COLORS.secondary,
    CHART_COLORS.tertiary,
    CHART_COLORS.chart4,
    CHART_COLORS.chart5,
  ];

  const defaultBgColors = [
    CHART_COLORS_RGBA.primary,
    CHART_COLORS_RGBA.secondary,
    CHART_COLORS_RGBA.tertiary,
    CHART_COLORS_RGBA.chart4,
    CHART_COLORS_RGBA.chart5,
  ];

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      borderColor: dataset.color || defaultColors[index],
      backgroundColor: defaultBgColors[index],
      tension: 0.4,
      fill: true,
      pointBackgroundColor: 'white',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
    })),
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
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
          <Line data={chartData} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
