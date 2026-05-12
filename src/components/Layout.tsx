import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden font-inter">
      {/* Background spotlights */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-950/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-950/15 blur-[120px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 container pt-24 pb-12 px-4 min-h-[calc(100vh-100px)]">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
