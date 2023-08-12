'use client';

import { SignOutButton, UserButton } from '@clerk/nextjs';
import { Modal } from '@/components/ui/modal';

export default function SetupPage() {
  return (
    <main>
      <div>Hello World 2!</div>
      <UserButton afterSignOutUrl="/" />
      <Modal title="Testing" description="Wohoo!" isOpen onClose={() => {}}>
        CHILDREN
      </Modal>
    </main>
  );
}
