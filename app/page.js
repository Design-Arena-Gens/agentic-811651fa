export default function HomePage() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', padding: 24 }}>
      <div style={{ textAlign: 'center', maxWidth: 640 }}>
        <h1 style={{ fontSize: 40, marginBottom: 8 }}>Hello ??</h1>
        <p style={{ color: '#555', fontSize: 18, lineHeight: 1.6 }}>
          Welcome. This site is powered by Next.js and deployed to Vercel.
        </p>
        <p style={{ marginTop: 24 }}>
          <a href="/api/health" style={{ color: '#0070f3', textDecoration: 'underline' }}>Health check</a>
        </p>
      </div>
    </main>
  );
}
