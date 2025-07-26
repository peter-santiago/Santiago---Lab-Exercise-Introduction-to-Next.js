// page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/about">About</Link>
      </nav>
      <h1>Welcome to My Next.js App!</h1>
      <p>This is the homepage customized by Pipo Santiago.</p>
    </div>
  );
}
