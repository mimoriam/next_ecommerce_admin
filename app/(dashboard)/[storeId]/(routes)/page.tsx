import { prismadb } from '@/lib/prismadb';

interface DashBoardProps {
  params: { storeId: string };
}
export default async function DashboardPage({ params }: DashBoardProps) {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
}
