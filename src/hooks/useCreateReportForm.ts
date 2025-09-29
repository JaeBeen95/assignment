import { useState } from 'react';
import { useCreateOrUpdatePost } from './useCompany';
import { formatDate } from '@/lib/utils';

type FormData = {
  title: string;
  content: string;
  resourceUid: string;
};

export function useCreateReportForm() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    resourceUid: '',
  });

  const createPostMutation = useCreateOrUpdatePost();

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({ title: '', content: '', resourceUid: '' });
  };

  const expandForm = () => setIsExpanded(true);

  const collapseForm = () => {
    setIsExpanded(false);
    resetForm();
  };

  const isFormValid = () => {
    return (
      formData.title.trim() && formData.content.trim() && formData.resourceUid
    );
  };

  const submitForm = async () => {
    if (!isFormValid()) {
      throw new Error('모든 필드를 입력해주세요.');
    }

    await createPostMutation.mutateAsync({
      title: formData.title.trim(),
      content: formData.content.trim(),
      resourceUid: formData.resourceUid,
      dateTime: formatDate(),
    });

    resetForm();
    collapseForm();
  };

  return {
    isExpanded,
    formData,
    isSubmitting: createPostMutation.isPending,

    updateField,
    expandForm,
    collapseForm,
    submitForm,

    isFormValid: isFormValid(),
  };
}
