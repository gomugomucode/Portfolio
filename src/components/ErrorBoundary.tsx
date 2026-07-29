import React, { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[ErrorBoundary caught an error]:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div role="alert" className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 gap-6">
          <div className="w-14 h-14 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-2">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="flex flex-col gap-2 max-w-md">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Something went wrong
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An unhandled application error occurred. You can attempt to refresh the page to clear temporary UI state.
            </p>
          </div>
          <Button onClick={this.handleReset} variant="outline" className="gap-2 font-mono text-xs">
            <RefreshCw className="w-3.5 h-3.5" />
            Reload Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
