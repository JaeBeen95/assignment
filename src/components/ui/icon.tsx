import { LucideIcon } from 'lucide-react';

type IconProps = {
  icon: LucideIcon;
  className?: string;
  size?: number;
};

export function Icon({ icon: IconComponent, className = '', size }: IconProps) {
  const iconProps = {
    className,
    ...(size && { size }),
  };

  return <IconComponent {...iconProps} />;
}
