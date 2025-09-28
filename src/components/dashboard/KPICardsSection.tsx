import { KPICard } from './KPICard';
import { TrendingDown, Zap, Target, Leaf, CalendarDays } from 'lucide-react';

type KPIData = {
  totalEmissions: string;
  currentMonth: string;
  monthlyTrend: string;
  targetAchievement: string;
  mainSource: string;
  sourcePercentage: string;
};

type KPICardsProps = {
  data: KPIData;
};

export function KPICardsSection({ data }: KPICardsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <KPICard
        title="총 배출량 (Q1)"
        value={data.totalEmissions}
        icon={Leaf}
        subtitle="1분기 누적"
      />

      <KPICard
        title="이번 달 배출량"
        value={data.currentMonth}
        icon={CalendarDays}
        trend={{
          icon: TrendingDown,
          value: data.monthlyTrend,
          color: 'success',
        }}
      />

      <KPICard
        title="연간 목표 달성률"
        value={data.targetAchievement}
        icon={Target}
        badge={{
          variant: 'success',
          text: '순조',
        }}
      />

      <KPICard
        title="주요 배출원"
        value={data.mainSource}
        icon={Zap}
        subtitle={data.sourcePercentage}
      />
    </section>
  );
}
