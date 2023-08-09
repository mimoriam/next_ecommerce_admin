import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>Hello World 2!</div>
      <Button asChild variant="outline">
        <Link href="/">Click</Link>
      </Button>
    </main>
  );
}
