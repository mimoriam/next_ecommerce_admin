import { SignOutButton, UserButton } from '@clerk/nextjs';

export default function SetupPage() {
  return (
    <main>
      <div>Hello World 2!</div>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
