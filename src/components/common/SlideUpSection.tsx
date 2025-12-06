import { motion } from "framer-motion";
import React from "react";

interface SlideUpSectionProps {
  children: React.ReactNode;
  className?: string;
}

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function SlideUpSection({ children, className }: SlideUpSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={slideUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
