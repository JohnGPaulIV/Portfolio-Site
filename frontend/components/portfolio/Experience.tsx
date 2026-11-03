"use client";
import { TIMELINE } from "./data";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";

export function Experience() {
    return (
        <section id="experience" className="relative px-4 py-24 sm:py-32 text-[oklch(0.96_0.006_190)]">
            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    index="04"
                    title="Experience & Education"
                    kicker="Where I've studied, worked, and show up."
                />

                <div className="relative pl-8 sm:pl-12">
                    <span className="absolute top-2 bottom-2 left-1.75 w-px bg-border sm:left-2.75" />

                    {TIMELINE.map((item, i) => (
                        <Reveal key={item.title + i} delay={i * 0.06}>
                            <div className="relative pb-10 last:pb-0">
                                <span className="absolute top-2 -left-8 grid size-4 place-items-center sm:-left-12">
                                    <span className="size-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
                                </span>

                                <div className="rounded 3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
                                        <div className="min-w-8">
                                            <h3 className="truncate text-lg font-semibold">
                                                {item.title}
                                            </h3>
                                            <p className="truncate text-sm text-primary">{item.org}</p>
                                        </div>
                                        <span className="shrink-0 rounded-full border border-border px-4 py-1 font-mono text-[11px] text-muted-foreground">
                                            {item.period}
                                        </span>
                                    </div>

                                    <ul className="mt-4 space-y-2">
                                        {item.points.map((p) => (
                                            <li
                                                key={p}
                                                className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                                            >
                                                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>

                                    <span className="mt-4 inline-block font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                                        {item.kind}
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}