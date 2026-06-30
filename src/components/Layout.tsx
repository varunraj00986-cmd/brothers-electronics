import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingButtons } from './FloatingButtons';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main className="flex-grow flex flex-col pt-20">
        {children}
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
