import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Resume | Ansh Shah',
};

export default function ResumePage() {
  redirect('/resume/Ansh_Shah_resume.pdf');
}
