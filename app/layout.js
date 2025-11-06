import './globals.css';

export const metadata = {
  title: 'Agentic Starter',
  description: 'Deployed to Vercel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
