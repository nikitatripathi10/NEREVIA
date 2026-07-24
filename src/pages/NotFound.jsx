import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start px-6 py-24 lg:px-10">
      <p className="eyebrow">Signal lost</p>
      <h1 className="mt-3 font-display text-3xl font-semibold">This region hasn&apos;t been charted.</h1>
      <p className="mt-3 max-w-md text-sm text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist. Head back to the overview.
      </p>
      <Link to="/" className="mt-6 rounded-lg bg-bio px-5 py-3 font-body text-sm font-medium text-abyss">
        Return to Overview
      </Link>
    </div>
  );
}
