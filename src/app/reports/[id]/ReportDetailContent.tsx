'use client';

import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Calendar, Building2, ArrowLeft } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { useReportDetail, useCompanyNameMap } from '@/hooks/useCompany';
import { formatDateForDisplay } from '@/lib/utils';
import Link from 'next/link';

type ReportDetailContentProps = {
  id: string;
};

export default function ReportDetailContent({ id }: ReportDetailContentProps) {
  const { data: post, isNotFound } = useReportDetail(id);
  const { data: companyNameMap } = useCompanyNameMap();

  if (isNotFound) {
    notFound();
  }

  if (!post) {
    return null;
  }

  const companyName =
    companyNameMap?.get(post.resourceUid) || '알 수 없는 회사';

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/reports">
            <Button variant="outline" className="flex items-center gap-2">
              <Icon icon={ArrowLeft} className="w-4 h-4" />
              목록으로
            </Button>
          </Link>

          <Header
            title="보고서 상세"
            description="지속가능성 보고서의 상세 내용을 확인하세요"
          />
        </div>

        <Card className="p-8">
          <div className="space-y-6">
            <div className="border-b border-[var(--border)] pb-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  icon={FileText}
                  className="w-6 h-6 text-[var(--primary)]"
                />
                <h1 className="text-2xl font-bold text-[var(--foreground)]">
                  {post.title}
                </h1>
              </div>

              <div className="flex items-center gap-6 text-sm text-[var(--foreground)]/60">
                <div className="flex items-center gap-2">
                  <Icon icon={Building2} className="w-4 h-4" />
                  <span>{companyName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon={Calendar} className="w-4 h-4" />
                  <span>{formatDateForDisplay(post.dateTime)}</span>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <div className="text-[var(--foreground)] leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
