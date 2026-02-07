import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-16rem)] items-center justify-center bg-primary-dark py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Page Not Found
          </h2>
          <p className="mb-8 text-muted">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg bg-muted px-6 py-3 text-sm font-medium text-primary-dark transition-all hover:bg-muted/90 hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
