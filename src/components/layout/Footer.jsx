export default function Footer() {
  return (
    <footer className="border-t border-abyss-line px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Aqua Sentinel. Built for national-level hackathon demonstration.</p>
        <p>Reference metrics are illustrative; forecast layers are model-generated, not live telemetry.</p>
      </div>
    </footer>
  );
}
