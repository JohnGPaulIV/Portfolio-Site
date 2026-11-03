"use client";
import { Download, Eye, FileText } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { PROFILE } from "./data";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";

export function Resume() {
    return (
        <section id="resume" className="relative px-4 py-24 sm:py-32 text-[oklch(0.96_0.006_190)]">
            <div className="mx-auto max-w-4xl">
                <SectionHeading index="05" title="Resume" />

                <Reveal>
                    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-12">
                        <div className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-primary/10 blur-[100px]" />
                        <div className="relative grid gap-8 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
                            <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                                <FileText className="size-7" />
                            </span>
                            <div className="min-w-0">
                                <h3 className="text-2xl font-bold">
                                    {PROFILE.name} - Resume [Updated Oct. 2026]
                                </h3>
                                <p className="mt-2 text-muted-foreground">
                                    One page, PDF. Education, experience, projects, and skills.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Dialog>
                                        <DialogTrigger asChild className="hover:cursor-pointer">
                                            <button
                                                type="button"
                                                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:glow-ring"
                                            >
                                                <Eye className="size-4" />
                                                View Resume
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-3xl border-border bg-surface">
                                            <DialogHeader>
                                                <DialogTitle>Resume - {PROFILE.name}</DialogTitle>
                                            </DialogHeader>
                                            <iframe
                                                src={PROFILE.resume}
                                                title="Resume preview"
                                                className="h-[65vh] w-full rounded-xl border border-border bg-background"
                                            />
                                        </DialogContent>
                                    </Dialog>

                                    <a
                                        href={PROFILE.resume}
                                        download
                                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                                    >
                                        <Download className="size-4" />
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}