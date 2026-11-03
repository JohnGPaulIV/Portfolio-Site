"use client";
import { Code2, Database, Layers, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "./data";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";

const icons = [Code2, Layers, Wrench, Database];

export function Skills() {
    return (
        <section id="skills" className="relative px-4 py-24 sm:py-32 text-[oklch(0.96_0.006_190)]">
            <div className="mx-auto max-w-5xl">
                <SectionHeading
                    index="02"
                    title="Skills & Tech Stack"
                    kicker="The tools I reach for, grouped by what they do."
                />

                <div className="grid gap-5 sm:grid-cols-2">
                    {SKILL_GROUPS.map((group, gi) => {
                        const Icon = icons[gi % icons.length] ?? Code2;
                        return (
                            <Reveal key={group.category} delay={gi * 0.08}>
                                <div className="group h-full rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-(--shadow-card)">
                                    <div className="flex items-center gap-3 ">
                                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/1- text-primary transition-transform duration-300 group-hover:scale-110">
                                            <Icon className="size-5" />
                                        </span>
                                        <h3 className="truncate text-lg font-semibold">
                                            {group.category}
                                        </h3>
                                    </div>

                                    <ul className="mt-5 flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <li
                                                key={item}
                                                className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/60 hover:text-primary"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}