interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-label uppercase text-text-muted tracking-[0.1em]">
      {children}
    </span>
  );
}
