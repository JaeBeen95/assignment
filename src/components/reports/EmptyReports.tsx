import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

export function EmptyReports() {
  return (
    <Card className="p-8 text-center">
      <Icon
        icon={FileText}
        className="w-12 h-12 text-[var(--foreground)]/40 mx-auto mb-4"
      />
      <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
        보고서가 없습니다
      </h3>
      <p className="text-[var(--foreground)]/60">
        아직 등록된 지속가능성 보고서가 없습니다.
      </p>
    </Card>
  );
}
