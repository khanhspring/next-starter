import PrimaryLayout from '@/layouts/PrimaryLayout';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PrimaryLayout>{children}</PrimaryLayout>;
}
