import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}
