import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="relative z-10 w-full min-h-[calc(100vh-100px)] pt-16">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
