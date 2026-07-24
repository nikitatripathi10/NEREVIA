import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Waves, Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Overview' },
  { to: '/digital-twin', label: 'Digital Twin' },
  { to: '/intelligence', label: 'AI Intelligence' },
  { to: '/simulator', label: 'Simulator' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-abyss-line/70 bg-abyss/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
      >
        <NavLink to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <Waves className="h-5 w-5 text-bio" aria-hidden="true" />
          <span>
            Aqua<span className="text-bio">Sentinel</span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `font-body text-sm transition-colors ${
                    isActive ? 'text-bio' : 'text-ink-muted hover:text-ink-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg border border-abyss-line p-2 text-ink-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-abyss-line px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.to} className="py-2">
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block font-body text-base ${isActive ? 'text-bio' : 'text-ink-muted'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
