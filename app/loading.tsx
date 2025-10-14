export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-4xl px-6">
        <div className="h-12 bg-surface rounded-theme-lg w-1/3"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-32 bg-surface rounded-theme-lg"></div>
          <div className="h-32 bg-surface rounded-theme-lg"></div>
          <div className="h-32 bg-surface rounded-theme-lg"></div>
        </div>
        <div className="h-64 bg-surface rounded-theme-lg"></div>
      </div>
    </div>
  );
}
