import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/layout/sidebar';
import QueryProvider from '@/providers/queryProvider';

export const metadata: Metadata = {
  title: 'HanaLoop Carbon Emissions Dashboard',
  description:
    'Carbon emissions management dashboard for executives and managers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <QueryProvider>
          <Sidebar />
          <main className="flex-1 flex flex-col overflow-y-auto">
            {children}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
