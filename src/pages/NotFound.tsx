import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16">
      <div className="text-center flex flex-col items-center gap-4 max-w-md px-4">
        <h1 className="font-display text-8xl md:text-9xl font-black tracking-tighter text-muted-foreground/30 leading-none">
          404
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground uppercase">
          Architecture not found.
        </h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          The route you requested doesn't exist in this environment.
        </p>
        <Button variant="default" asChild className="mt-4">
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
