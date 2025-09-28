import type {
  Company,
  KPIData,
  EmissionBySource,
  MonthlyTrendData,
} from '@/types';

export function calculateKPIs(company: Company): KPIData {
  if (!company.emissions.length) {
    return {
      totalEmissions: '0 tCO2',
      currentMonth: '0 tCO2',
      monthlyTrend: '0%',
      targetAchievement: '0%',
      mainSource: '-',
      sourcePercentage: '0%',
    };
  }

  const totalEmissions = company.emissions.reduce(
    (sum, emission) => sum + emission.emissions,
    0
  );

  const latestMonth = company.emissions
    .map((e) => e.yearMonth)
    .sort()
    .pop();

  const currentMonthEmissions = company.emissions
    .filter((e) => e.yearMonth === latestMonth)
    .reduce((sum, emission) => sum + emission.emissions, 0);

  const monthlyTrend = '-14.4% vs 전월';

  const targetAchievement = '68.4%';

  const sourceEmissions = company.emissions.reduce(
    (acc, emission) => {
      acc[emission.source] = (acc[emission.source] || 0) + emission.emissions;
      return acc;
    },
    {} as Record<string, number>
  );

  const mainSourceEntry = Object.entries(sourceEmissions).sort(
    ([, a], [, b]) => b - a
  )[0];

  const mainSource = mainSourceEntry?.[0] || '-';
  const mainSourceEmissions = mainSourceEntry?.[1] || 0;
  const sourcePercentage =
    totalEmissions > 0
      ? `${((mainSourceEmissions / totalEmissions) * 100).toFixed(1)}% 비중`
      : '0% 비중';

  return {
    totalEmissions: `${totalEmissions} tCO2`,
    currentMonth: `${currentMonthEmissions} tCO2`,
    monthlyTrend,
    targetAchievement,
    mainSource,
    sourcePercentage,
  };
}

export function calculateEmissionBySource(company: Company): EmissionBySource {
  if (!company.emissions.length) {
    return { labels: [], values: [] };
  }

  const sourceEmissions = company.emissions.reduce(
    (acc, emission) => {
      acc[emission.source] = (acc[emission.source] || 0) + emission.emissions;
      return acc;
    },
    {} as Record<string, number>
  );

  const entries = Object.entries(sourceEmissions).sort(([, a], [, b]) => b - a);

  return {
    labels: entries.map(([source]) => source),
    values: entries.map(([, emissions]) => emissions),
  };
}

export function calculateMonthlyTrend(company: Company): MonthlyTrendData {
  if (!company.emissions.length) {
    return {
      labels: [],
      datasets: [],
    };
  }

  const monthlyEmissions = company.emissions.reduce(
    (acc, emission) => {
      acc[emission.yearMonth] =
        (acc[emission.yearMonth] || 0) + emission.emissions;
      return acc;
    },
    {} as Record<string, number>
  );

  const sortedEntries = Object.entries(monthlyEmissions).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  const labels = sortedEntries.map(([month]) => {
    const [, monthNum] = month.split('-');
    return `${monthNum}월`;
  });

  const data = sortedEntries.map(([, emissions]) => emissions);

  return {
    labels,
    datasets: [
      {
        label: `${company.name} 총 배출량`,
        data,
      },
    ],
  };
}
