import { PropsWithChildren } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function PrimaryLayout({ children }: PropsWithChildren) {
  return (
    <div className="pl-sidebar">
      <Sidebar />
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="flex-1 px-8 mt-header">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
