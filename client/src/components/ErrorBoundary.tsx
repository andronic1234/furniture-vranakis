import React from "react";

/** This is an ErrorBoundary class component that displays an error message and
 * prompts the user to refresh the page.
 */
class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  render() {
    return (
      <div className="flex items-center justify-center h-screen flex-col gap-5">
        <h1 className="text-4xl text-accent font-bold">Παρουσιάστηκε σφάλμα</h1>
        <h4 className="text-xl italic opacity-60">
          Παρακαλώ ανανεώστε την σελίδα.
        </h4>
      </div>
    );
  }
}

export default ErrorBoundary;
