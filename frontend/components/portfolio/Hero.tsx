"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { ArrowDown, Download, Mail } from "lucide-react";
import { SiGithub, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { Linkedin } from "@/components/ui/icons";

import { PROFILE } from "./data";


function useTypewriter(words: string[]) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length] ?? "";
        const done = !deleting && text === word;
        const cleared = deleting && text === "";

        const timeout = setTimeout(
            () => {
                if (done) return setDeleting(true);
                if (cleared) {
                    setDeleting(false);
                    setIndex((i) => (i + 1) % words.length);
                    return;
                }

                setText(
                    deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
                );
            },
            done ? 1600 : deleting ? 40 : 75
        );

        return () => clearTimeout(timeout);
    }, [text, deleting, index, words]);

    return text;
}


const socials = [
    { href: PROFILE.github, label: "GitHub", Icon: SiGithub },
    { href: PROFILE.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${PROFILE.email}`, label: "Email", Icon: Mail },
    { href: PROFILE.instagram, label: "Instagram", Icon: SiInstagram },
    // { href: PROFILE.x, label: "X", Icon: SiX },
];

export function Hero() {
    const typed = useTypewriter([...PROFILE.roles]);

    return (
        <section
            id="home"
            className={"relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-20"}
        >
            <div className={"grid-backdrop pointer-events-none absolute inset-0 opacity-60"} />
            <div className={"pointer-events-none absolute -top-40 left-1/2 size-144 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"} />

            <div className={"relative mx-auto w-full max-w-5xl"}>
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={"inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"}>
                        <span className={"size-1.5 rounded-full bg-primary"} />
                        James Madison University · Class of 2026
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={"mt-6 text-5xl leading-[0.95] font-bold sm:text-7xl lg:text-8xl"}
                >
                    <span className={`text-white`}>John Gilbert</span>
                    <br />
                    <span className={"text-gradient"}>Paul IV</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className={`mt-6 font-mono text-lg text-foreground sm:text-2xl`}
                >
                    <span className="text-muted-foreground">&gt;</span> {typed}
                    <span className="caret-blink ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 bg-primary" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
                >
                    {PROFILE.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, .36, 1] }}
                    className="mt-10 flex flex-wrap items-center gap-3"
                >
                    <a
                        href={PROFILE.resume}
                        download
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:glow-ring"
                    >
                        <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                        Download Resume
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                        View Projects
                    </a>

                    <div className="flex items-center gap-2 sm:ml-3">
                        {socials.map(({ href, label, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target="_blank"
                                rel="noreferrer"
                                className="grid size-11 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                            >
                                <Icon className="size-4" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <a
                href="#about"
                aria-label="Scroll to about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
            >
                <ArrowDown className="size-5 animate-bounce" />
            </a>
        </section>
    );
}


// export default function Hero() {
//     return (
//         <>
//         </>
//     );
// }