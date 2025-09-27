import { forwardRef } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--secondary)]/80',
        success:
          'bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20',
        warning:
          'bg-[var(--warning)]/10 text-[var(--warning)] border border-[var(--warning)]/20',
        destructive:
          'bg-[var(--destructive)]/10 text-[var(--destructive)] border border-[var(--destructive)]/20',
        outline: 'border border-[var(--border)] text-[var(--foreground)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
