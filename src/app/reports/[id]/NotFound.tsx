import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowLeft } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <div className="container mx-auto p-6">
        <Card className="p-8 text-center max-w-md mx-auto">
          <Icon
            icon={FileText}
            className="w-16 h-16 text-[var(--foreground)]/40 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2">
            보고서를 찾을 수 없습니다
          </h1>
          <p className="text-[var(--foreground)]/60 mb-6">
            요청하신 보고서가 존재하지 않거나 삭제되었을 수 있습니다.
          </p>
          <Link href="/reports">
            <Button className="flex items-center gap-2 mx-auto">
              <Icon icon={ArrowLeft} className="w-4 h-4" />
              보고서 목록으로 돌아가기
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
