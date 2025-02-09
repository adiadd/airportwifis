import { Wifi } from "lucide-react";
import Link from "next/link";
import type { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-teal-50 to-indigo-50">
      <div className="bg-grid-slate-200 absolute inset-0 -z-10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold text-teal-600 transition-colors hover:text-teal-700"
          >
            <Wifi size={28} />
            <span>AirportWiFis</span>
          </Link>
          <nav>{/* Add navigation items here if needed */}</nav>
        </div>
      </header>
      <main className="container mx-auto flex-1 px-4 py-8">{children}</main>
      <footer className="mt-auto border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AirportWiFis
        </div>
      </footer>
    </div>
  );
};

export default Layout;
