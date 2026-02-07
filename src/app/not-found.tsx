import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SectionContainer from '@/components/SectionContainer';

export default function NotFound() {
  return (
    <SectionContainer className="flex min-h-[calc(100vh-16rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary-dark">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-primary-dark">
          Page Not Found
        </h2>
        <p className="mb-8 text-secondary">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-lg bg-primary-dark px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary-dark/90 hover:shadow-lg"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>
    </SectionContainer>
  );
}
