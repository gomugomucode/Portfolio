import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./components/Layout";
import ErrorBoundary from "@/components/ErrorBoundary";
import { trackPageView } from "@/lib/analytics";

// Lazy load pages for code splitting and better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogArticlePreview = lazy(() => import("./pages/BlogArticlePreview"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Now = lazy(() => import("./pages/Now"));
const RecruiterExperience = lazy(() => import("./pages/RecruiterExperience"));
const AIPortfolio = lazy(() => import("./pages/AIPortfolio"));
const OpenSourceHub = lazy(() => import("./pages/OpenSourceHub"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Uses = lazy(() => import("./pages/Uses"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Fallback loader for Suspense
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

// SPA Analytics PageView Listener
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AnalyticsTracker />
        <Toaster />
        <Layout>
          <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogArticlePreview />} />
            <Route path="/now" element={<Now />} />
            <Route path="/for-recruiters" element={<RecruiterExperience />} />
            <Route path="/ai" element={<AIPortfolio />} />
            <Route path="/open-source" element={<OpenSourceHub />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/uses" element={<Uses />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  </QueryClientProvider>
</ErrorBoundary>
);

export default App;