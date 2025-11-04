import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

type HoverState = "left" | "right" | null;

const RIGHT_IMAGES = [
  "https://images.unsplash.com/photo-1606577924000-8aa3b1f8bfc8?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1593032457861-7f9e92d229cc?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1581349487871-6c1c6217dc3c?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1583270354364-1eea50c0e77a?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1596464716126-9e2b3efb1c23?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=60",
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
    <section className="relative w-full h-screen flex mt-20 select-none overflow-hidden">
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
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1400&q=80"
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
                <button className="px-6 py-3 rounded-lg bg-lime-500 text-white font-semibold shadow-lg hover:brightness-105 transition">
                  Join as Designer
                </button>
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
        <div className="absolute inset-0 p-6 md:p-12 flex items-center justify-center pointer-events-none">
          <div className="w-full max-w-3xl grid grid-cols-3 md:grid-cols-4 gap-3 opacity-90">
            {RIGHT_IMAGES.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{
                  opacity: hovered === "right" ? 1 : 0.9,
                  scale: hovered === "right" ? 1.03 : 1,
                }}
                transition={{ delay: 0.08 * idx, duration: 0.5 }}
                className="rounded-md overflow-hidden shadow-sm bg-gray-100"
                style={{ minHeight: 90 }}
              >
                <img
                  src={src}
                  alt={`fashion-${idx}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

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
          className="h-3/4 w-[2px] rounded-full bg-gradient-to-b from-lime-400 to-lime-600 blur-[0.6px] opacity-90"
        />
      </div>
    </section>
  );
};

export default HeroSplit;
