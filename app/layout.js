'use client'; // 👈 Keep this because of ThemeProvider

import '@fontsource/roboto';
import { Geist, Geist_Mono } from 'next/font/google';
import ReactQueryClientProvider from 'providers/ReactQueryClientProvider';
import theme from '../lib/theme';
import './globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryClientProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
