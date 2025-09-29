'use client';

import { Header } from '@/components/layout/header';
import { Card } from '@/components/ui/card';
import { usePosts, useCompanyNameMap } from '@/hooks/useCompany';
import { FileText, Calendar, Building2 } from 'lucide-react';
import { Icon } from '@/components/ui/icon';

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

        <div className="grid gap-4">
          {posts.map((post) => (
            <Card key={post.id} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      icon={FileText}
                      className="w-5 h-5 text-[var(--primary)]"
                    />
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">
                      {post.title}
                    </h3>
                  </div>

                  <p className="text-[var(--foreground)]/70 mb-4">
                    {post.content}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-[var(--foreground)]/60">
                    <div className="flex items-center gap-2">
                      <Icon icon={Building2} className="w-4 h-4" />
                      <span>
                        {companyNameMap?.get(post.resourceUid) ||
                          '알 수 없는 회사'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon={Calendar} className="w-4 h-4" />
                      <span>{post.dateTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {(!posts || posts.length === 0) && (
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
        )}
      </div>
    </div>
  );
}
