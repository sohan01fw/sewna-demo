import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import FloatingImages from "./FloatingImages";
import Navbar from "./Navbar";

type HoverState = "left" | "right" | null;

const RIGHT_IMAGES = [
  "https://www.joinsewna.com/static/media/img1_100W.c4c12c89b9425dcfb847.webp",
  "https://www.joinsewna.com/static/media/img2_121W.63d7d6cec1cd6b7fa55f.webp",
  "https://www.joinsewna.com/static/media/img3_121.489c23a73323650e3be0.webp",
  "https://www.joinsewna.com/static/media/img4_98W.88d8badb166f0b3d70c6.webp",
  "https://www.joinsewna.com/static/media/img5_100W.cb18445e0f95f73f476a.webp",
  "https://www.joinsewna.com/static/media/img6_84W.6ea8425d58235c860bc1.webp",
  "https://www.joinsewna.com/static/media/img7_99W.466b4847c74a1100d8cf.webp",
  "https://www.joinsewna.com/static/media/img8_153W.ab1cdba242106da0a7f5.webp",
  "https://www.joinsewna.com/static/media/img9_151W.dab4600f286264b47ee8.webp",
  "https://www.joinsewna.com/static/media/img10_97W.6e566d084283af644fce.webp",
  "https://www.joinsewna.com/static/media/img11_105W.a956a1983f8b70c91cd6.webp",
  "https://www.joinsewna.com/static/media/img12_97W.c70c44b464503f0a7b11.jpg",
  "https://www.joinsewna.com/static/media/img13_165W.638cd11dd3df3be8af6f.webp",
  "https://www.joinsewna.com/static/media/img14_132W.2e342e56e3702e86c9a6.webp",
];

const HeroSplit: React.FC = () => {
  const [hovered, setHovered] = useState<HoverState>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.PointerEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setPointer({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  return (
    <section className="relative w-screen h-screen flex select-none overflow-hidden">
      <Navbar />
      {/* Left side - Designer */}
      <motion.div
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        onPointerMove={onMove}
        animate={{
          flex: hovered === "left" ? 6 : hovered === "right" ? 3 : 5,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-center overflow-hidden bg-black text-white"
        style={{ minWidth: 0 }} // keep flex from collapsing
      >
        {/* Background image with parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            // src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1400&q=80"
            src="https://www.joinsewna.com/static/media/designer.80f7a2565c25f4bb9918.jpeg"
            alt="Designer at work"
            className="w-full h-full object-cover"
            animate={{
              x: pointer.x * 20,
              y: pointer.y * 20,
              scale: hovered === "left" ? 1.03 : 1,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ willChange: "transform" }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/40" />
        </div>

        {/* Text block */}
        <div className="relative z-10 max-w-lg text-left px-8 md:px-16">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            I am a designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-4 text-sm md:text-base text-white/85"
          >
            Showcase your craft, take on bespoke projects and connect with
            clients who value original design.
          </motion.p>

          <AnimatePresence>
            {hovered === "left" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
                className="mt-6"
              >
                <Link to="/onboarding" className="hover:cursor-pointer">
                  <button className="px-6 py-3 rounded-lg bg-lime-500 text-white font-semibold shadow-lg hover:brightness-105 transition hover:cursor-pointer">
                    Join as Designer
                  </button>
                </Link>
              </motion.div>
            )}
            {hovered === null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-6"
              >
                <button className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium bg-white/6 backdrop-blur-sm">
                  Learn More
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Right side - Client */}
      <motion.div
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        onPointerMove={onMove}
        animate={{
          flex: hovered === "right" ? 6 : hovered === "left" ? 3 : 5,
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-center bg-white text-black overflow-hidden"
        style={{ minWidth: 0 }}
      >
        {/* Right gallery with soft blur and stagger */}

        <FloatingImages images={RIGHT_IMAGES} />
        {/* Right text block */}
        <div className="relative z-10 max-w-lg text-center px-8 md:px-16">
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            I need a designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.9, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-4 text-sm md:text-base text-black/75"
          >
            Discover creators who craft one-of-a-kind garments — commission
            bespoke work or collaborate.
          </motion.p>

          <AnimatePresence>
            {hovered === "right" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
                className="mt-6"
              >
                <Link to="/Discover" className="hover:cursor-pointer">
                  <button className="px-6 py-3 rounded-lg bg-black text-white font-semibold shadow-lg hover:brightness-95 transition hover:cursor-pointer">
                    Find a Designer
                  </button>
                </Link>
              </motion.div>
            )}
            {hovered === null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-6"
              >
                <button className="px-6 py-3 rounded-lg border border-black/10 text-black font-medium bg-white/80">
                  Browse Work
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Soft glowing divider */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 w-0 flex items-center justify-center">
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: [1, 1.15, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-3/4 w-0.5 rounded-full bg-linear-to-b from-lime-400 to-lime-600 blur-[0.6px] opacity-90"
        />
      </div>
    </section>
  );
};

export default HeroSplit;
