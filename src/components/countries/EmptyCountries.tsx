import { Card } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

export function EmptyCountries() {
  return (
    <Card className="p-8 text-center">
      <Icon
        icon={Globe}
        className="w-12 h-12 text-[var(--foreground)]/40 mx-auto mb-4"
      />
      <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
        국가 데이터가 없습니다
      </h3>
      <p className="text-[var(--foreground)]/60">
        아직 등록된 국가 정보가 없습니다.
      </p>
    </Card>
  );
}
