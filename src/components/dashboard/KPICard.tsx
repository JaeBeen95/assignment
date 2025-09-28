import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

type KPICardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    icon: LucideIcon;
    value: string;
    color: 'success' | 'destructive';
  };
  badge?: {
    variant: 'success' | 'warning' | 'default';
    text: string;
  };
};

export function KPICard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  badge,
}: KPICardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-[var(--foreground)]/60">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-[var(--foreground)]/60" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2 text-xs text-[var(--foreground)]/60">
          {trend && (
            <>
              <trend.icon className={`h-4 w-4 text-[var(--${trend.color})]`} />
              <span className={`text-[var(--${trend.color})]`}>
                {trend.value}
              </span>
            </>
          )}
          {badge && <Badge variant={badge.variant}>{badge.text}</Badge>}
          {subtitle && !trend && !badge && <span>{subtitle}</span>}
        </div>
      </CardContent>
    </Card>
  );
}
