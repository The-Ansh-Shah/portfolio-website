import { personalInfo } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary py-12">
      <div className="mx-auto max-w-content px-6 text-center">
        <p className="text-caption text-text-tertiary">
          &copy; {currentYear} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
