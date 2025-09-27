import type { Metadata } from 'next';
import './globals.css';

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
