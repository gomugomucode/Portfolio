import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="site-frame min-h-screen text-foreground relative flex flex-col">
      <div className="ambient-grid" aria-hidden="true" />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1} className="relative z-10 w-full flex-1 focus:outline-none">
        {children}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
