"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type SectionRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
