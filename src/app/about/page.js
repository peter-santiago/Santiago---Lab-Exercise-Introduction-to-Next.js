// app/about/page.js
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <h1>About Page</h1>
      <p>This page is all about our Next.js project.</p>
    </div>
  );
}
