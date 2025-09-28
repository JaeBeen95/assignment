'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <Icon
              icon={AlertTriangle}
              className="w-12 h-12 text-red-500 mx-auto"
            />
            <div>
              <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
                오류가 발생했습니다
              </h2>
              <p className="text-[var(--foreground)]/60 mb-4">
                {this.state.error?.message || '알 수 없는 오류가 발생했습니다.'}
              </p>
              <Button onClick={this.handleRetry} className="gap-2">
                <Icon icon={RefreshCw} className="w-4 h-4" />
                다시 시도
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function DashboardError({
  error,
  retry,
}: {
  error: Error;
  retry: () => void;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
      <div className="text-center space-y-4 p-8 max-w-md">
        <Icon icon={AlertTriangle} className="w-12 h-12 text-red-500 mx-auto" />
        <div>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
            대시보드를 불러올 수 없습니다
          </h2>
          <p className="text-[var(--foreground)]/60 mb-4">{error.message}</p>
          <Button onClick={retry} className="gap-2">
            <Icon icon={RefreshCw} className="w-4 h-4" />
            다시 시도
          </Button>
        </div>
      </div>
    </div>
  );
}
