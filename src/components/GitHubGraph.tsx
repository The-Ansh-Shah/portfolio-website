'use client';

import dynamic from 'next/dynamic';
import { useTheme } from '@/lib/ThemeContext';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => <div className="h-[120px]" />,
  }
);

export default function GitHubGraph() {
  const { theme } = useTheme();

  return (
    <div className="overflow-x-auto no-scrollbar">
      <GitHubCalendar
        username="The-Ansh-Shah"
        colorScheme={theme}
        fontSize={12}
        blockSize={11}
        blockMargin={3}
      />
    </div>
  );
}
