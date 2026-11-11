"use client";
import profile from "@/public/headshot.jpeg";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";

const facts = [
    { label: "Studying", value: "B.S. Computer Science, JMU" },
    { label: "Based in", value: "Harrisonburg, VA" },
    { label: "Currently learning", value: "Operating Systems, Machine Learning & Full-Stack Development" },
    { label: "Outside the terminal", value: "Watching TV (Current Show: Lanterns), Spending time with loved ones" },
];

export function About() {
    return (
        <section id="about" className="relative px-4 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl">
                <SectionHeading index="01" title="About Me" />

                <div className="grid gap-10 md:grid-cols-[280px_minmax(0,1fr)] md:gap-14">
                    <Reveal>
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-2xl" />
                            <img
                                src={profile.src}
                                alt="Photo of John Gilbert Paul IV"
                                loading="lazy"
                                width={768}
                                height={896}
                                className="relative aspect-4/5 w-full rounded-3xl border border-border object-cover"
                            />
                        </div>
                    </Reveal>

                    <div className="min-w-0">
                        <Reveal delay={0.1}>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                I'm a Computer Science student at{" "}
                                <span className="text-primary font-medium">James Madison University</span>{" "}
                                who began my coding journey at 8 years old creating my own Minecraft mods in Java
                                and never really stopped. Since then I've spent my time turning class projects, late-night ideas, and
                                currently a start-up in which I am co-founder and CTO, Daubert, into things people can actually use
                            </p>
                        </Reveal>
                        <Reveal delay={0.16}>
                            <p className="mt-5 leading-relaxed text-muted-foreground">
                                I enjoy solving problems where backend systems, data, and user-facing workflows come together.
                                Through my computer science coursework, systems projects, and work as a co-founder
                                and full-stack engineer on Daubert, I've built experience designing APIs, modeling data,
                                implementing authorization and financial workflows, and taking features from an idea through deployment.
                                Right now, I'm especially interested in full-stack and backend software engineering, and I'm looking for
                                new-grad opportunities where I can contribute to real products while continuing to grow as and engineer.
                            </p>
                        </Reveal>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {facts.map((f, i) => (
                                <Reveal key={f.label} delay={0.2 + i * 0.06}>
                                    <div className="h-full rounded-2xl border border-border bg-surface p-4 transition-colors duration-300 hover:border-primary/50">
                                        <p className="font-mono text-xs tracking-wide text-primary uppercase">
                                            {f.label}
                                        </p>
                                        <p className="mt-1.5 text-sm text-foreground">{f.value}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}