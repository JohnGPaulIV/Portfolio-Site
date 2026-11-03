"use client";
import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { Linkedin } from "@/components/ui/icons";
import { toast } from "sonner";
import { PROFILE } from "./data";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";

const socials = [
    { href: PROFILE.github, label: "Github", Icon: SiGithub },
    { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
    { href: PROFILE.x, label: "X / Twitter", Icon: SiX },
];

export function Contact() {
    const [sending, setSending] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);
        const form = e.currentTarget;
        setTimeout(() => {
            setSending(false);
            form.reset();
            toast.success("Message ready to send", {
                description: "TODO: WIRE TO BACKEND",
            });
        }, 700);
    };

    const field = "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none transition-colors";

    return (
        <section id="contact" className="relative px-4 py-24 sm:py-32">
            <div className="mx-auto max-w-5xl">
                <SectionHeading index="06" title="Let's build something together." />

                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_320px]">
                    <Reveal>
                        <form
                            onSubmit={onSubmit}
                            className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block font-mono text-xs tracking-wide text-muted-foreground uppercase"
                                    >
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="Jane Doe"
                                        className={field}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block font-mono text-xs tracking-wide text-muted-foreground uppercase"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="jane@company.com"
                                        className={field}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label
                                    htmlFor="message"
                                    className="mb-2 block font-mono text-xs tracking-wide text-muted-foreground uppercase"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me about the role, project, or idea..."
                                    className={field}
                                />

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:glow-ring disabled:opacity-60"
                                >
                                    <Send className="size-4" />
                                    {sending ? "Sending..." : "Send message"}
                                </button>
                            </div>
                        </form>
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