'use client';

import { Header } from '@/components/layout/header';
import { usePosts, useCompanyNameMap } from '@/hooks/useCompany';
import { ReportsList } from '@/components/reports/ReportsList';

export default function ReportsContent() {
  const { data: posts } = usePosts();
  const { data: companyNameMap } = useCompanyNameMap();

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="container mx-auto p-6 space-y-6">
        <Header
          title="지속가능성 보고서"
          description="회사별 탄소 배출량 및 지속가능성 관련 보고서를 확인하세요"
        />

        <ReportsList posts={posts} companyNameMap={companyNameMap} />
      </div>
    </div>
  );
}
