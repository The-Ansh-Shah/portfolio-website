import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-16rem)] items-center justify-center bg-bg-primary py-20">
      <div className="mx-auto max-w-content px-6 text-center">
        <h1 className="mb-4 text-hero text-text-primary">404</h1>
        <h2 className="mb-4 text-section text-text-primary">
          Page Not Found
        </h2>
        <p className="mb-8 text-body text-text-secondary">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-button bg-accent px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
