import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Plus, FileText } from 'lucide-react';
import { Icon } from '@/components/ui/icon';
import { useCompanies } from '@/hooks/useCompany';
import { useCreateReportForm } from '@/hooks/useCreateReportForm';
import { cn } from '@/lib/utils';

type CreateReportFormProps = {
  onCancel?: () => void;
};

export function CreateReportForm({ onCancel }: CreateReportFormProps) {
  const { data: companies } = useCompanies();
  const {
    isExpanded,
    formData,
    isSubmitting,
    isFormValid,
    updateField,
    expandForm,
    collapseForm,
    submitForm,
  } = useCreateReportForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitForm();
      onCancel?.();
    } catch (error) {
      console.error('보고서 생성 실패:', error);
    }
  };

  const handleCancel = () => {
    collapseForm();
    onCancel?.();
  };

  if (!isExpanded) {
    return (
      <Card className="p-4">
        <Button
          onClick={expandForm}
          className="w-full flex items-center justify-center gap-2"
        >
          <Icon icon={Plus} className="w-4 h-4" />새 보고서 작성
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Icon icon={FileText} className="w-5 h-5 text-[var(--primary)]" />
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          새 보고서 작성
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
            제목
          </label>
          <Input
            value={formData.title}
            onChange={(e) => updateField('title', e.target.value)}
            placeholder="보고서 제목을 입력하세요"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
            회사
          </label>
          <Select
            value={formData.resourceUid}
            onChange={(e) => updateField('resourceUid', e.target.value)}
            required
          >
            <option value="">회사를 선택하세요</option>
            {companies?.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
            내용
          </label>
          <textarea
            value={formData.content}
            onChange={(e) => updateField('content', e.target.value)}
            placeholder="보고서 내용을 입력하세요"
            className={cn(
              'w-full px-3 py-2 border border-[var(--border)] rounded-md min-h-24 resize-vertical',
              'bg-[var(--background)] text-[var(--foreground)]',
              'focus:border-[var(--primary)] focus:outline-none'
            )}
            required
          />
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className="flex-1"
          >
            {isSubmitting ? '저장 중...' : '저장'}
          </Button>
          <Button
            type="button"
            onClick={handleCancel}
            variant="outline"
            className="flex-1"
          >
            취소
          </Button>
        </div>
      </form>
    </Card>
  );
}
