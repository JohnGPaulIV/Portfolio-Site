"use client";
import { NAV_SECTIONS, PROFILE } from "./data";

export function Footer() {
    return (
        <footer className="border-t border-border px-4 py-10">
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <div className="min-w-0">
                    <p className="font-display font-bold">
                        <span className="text-gradient">JGP</span>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                        © {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind CSS.
                    </p>
                </div>
                <nav className="flex flex-wrap gap-x-4 gap-y-2">
                    {NAV_SECTIONS.map((s) => (
                        <a
                            key={s.id}
                            href={`#${s.id}`}
                            className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                            {s.label}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}