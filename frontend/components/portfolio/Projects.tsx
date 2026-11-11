"use client";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { PROJECTS } from "./data";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { useLayoutEffect, useRef, useState } from "react";

export function Projects() {
    const gridRef = useRef<HTMLDivElement>(null);
    const [imageHeight, setImageHeight] = useState(224);

    useLayoutEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const descriptions = grid.querySelectorAll<HTMLParagraphElement>("[data-project-detail]");

        const updateHeight = () => {
            const tallest = Math.max(0,
                ...Array.from(descriptions, (description) =>
                    description.getBoundingClientRect().height)
            );
            setImageHeight(Math.max(224, Math.ceil(tallest + 40)));
        };

        const observer = new ResizeObserver(updateHeight);

        descriptions.forEach((description) => observer.observe(description));
        updateHeight();

        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="relative px-4 py-24 sm:py-32 text-[oklch(0.96_0.006_190)]">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    index="03"
                    title="Projects"
                    kicker="A few things I've built. Hover a card for more detail."
                />

                <div
                    ref={gridRef}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {PROJECTS.map((p, i) => (
                        <Reveal key={p.title + i} delay={(i % 3) * 0.08}>
                            <div className="group h-full">
                                <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transform-[translate3d(0,0,0)] will-change-transform transition-[transform,border-color,box-shadow] duration-300 ease-out group-hover:transform-[translate3d(0,-6px,0)] group-hover:border-primary/50 group-hover:shadow-(--shadow-card)">
                                    <div
                                        className="relative isolate shrink-0 overflow-hidden bg-background"
                                        style={{ height: imageHeight }}
                                    >
                                        <img
                                            src={p.image.src}
                                            alt={`${p.title} screenshot`}
                                            loading="lazy"
                                            width={1024}
                                            height={640}
                                            className="absolute inset-0 block size-full object-cover opacity-100 transition-[opacity,scale] duration-300 ease-out group-hover:scale-105 group-hover:opacity-0"
                                        />

                                        <div className="absolute inset-0 z-10 flex items-center p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <p
                                                data-project-detail
                                                className="w-full text-sm leading-relaxed text-muted-foreground"
                                            >
                                                {p.detail}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative z-20 flex flex-1 flex-col bg-surface p-5">
                                        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                                            <h3 className="truncate text-lg font-semibold">{p.title}</h3>
                                            <div className="flex shrink-0 items-center gap-1.5">
                                                <a
                                                    href={p.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`${p.title} Github repository`}
                                                    className={`${p.github === null && "invisible"} grid size-8 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary`}
                                                >
                                                    <SiGithub className="size-4" />
                                                </a>
                                                <a
                                                    href={p.demo || ""}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`${p.title} live demo`}
                                                    className={`${p.demo === null && "invisible"} grid size-8 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary`}
                                                >
                                                    <ArrowUpRight className="size-4" />
                                                </a>
                                            </div>
                                        </div>

                                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                            {p.blurb}
                                        </p>

                                        <ul className="mt-4 flex flex-wrap gap-1.5 pt-1">
                                            {p.tags.map((t) => (
                                                <li
                                                    key={t}
                                                    className="rounded-md bg-primary/10 px-2 py-1 font-mono text-[11px] text-primary"
                                                >
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}