import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'ReceptionistAI - AI Phone Receptionist for Small Businesses',
  description: 'Give your small business a 24/7 AI receptionist and dedicated phone number in minutes. Never miss a call, booking, or customer again.',
  keywords: 'AI receptionist, phone answering, small business, AI phone, automated receptionist, booking',
  openGraph: {
    title: 'ReceptionistAI - AI Phone Receptionist for Small Businesses',
    description: 'Give your small business a 24/7 AI receptionist and dedicated phone number in minutes.',
    type: 'website',
    url: 'https://receptionistai.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-900 text-white antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a27',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
