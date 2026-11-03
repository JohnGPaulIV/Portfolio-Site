import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
    children,
    delay = 0,
    y = 24,
    className,
}: {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export function SectionHeading({
    index,
    title,
    kicker,
}: {
    index: string;
    title: string;
    kicker?: string;
}) {
    return (
        <Reveal className="mb-12">
            <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-primary">{index}</span>
                <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
                <span className="hidden h-px flex-1 bg-border sm:block" />
            </div>
            {kicker ? (
                <p className="mt-3 max-w-2xl text-muted-foreground">{kicker}</p>
            ) : null}
        </Reveal>
    )
}