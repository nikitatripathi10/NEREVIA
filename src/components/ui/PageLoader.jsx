export default function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <div className="flex items-center gap-3 font-mono text-sm text-ink-muted">
        <span className="h-2 w-2 animate-pulseGlow rounded-full bg-bio" aria-hidden="true" />
        Loading module…
      </div>
    </div>
  );
}
