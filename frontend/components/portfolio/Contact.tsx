"use client";
import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Linkedin } from "@/components/ui/icons";
import { toast } from "sonner";
import { PROFILE } from "./data";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import ContactForm from "../ui/ContactForm";

const socials = [
    { href: PROFILE.github, label: "Github", Icon: SiGithub },
    { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
    { href: PROFILE.x, label: "X / Twitter", Icon: SiX },
];

export function Contact() {
    return (
        <section id="contact" className="relative px-4 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl">
                <SectionHeading index="06" title="Let's build something together." />

                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
                    <Reveal>
                        <ContactForm />
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="flex h-full flex-col gap-4">
                            <div className="rounded-3xl border border-border bg-surface p-6">
                                <p className="font-mono text-xs tracking-wide text-primary uppercase">
                                    Direct
                                </p>
                                <a
                                    href={`mailto${PROFILE.email}`}
                                    className="mt-2 block truncate text-sm text-foreground hover:text-primary"
                                >
                                    {PROFILE.email}
                                </a>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    Open to internships and full-time positions.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {socials.map(({ href, label, Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                                    >
                                        <Icon className="size-4 shrink-0" />
                                        <span className="truncate">{label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}