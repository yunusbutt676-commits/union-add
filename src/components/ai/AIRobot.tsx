
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

interface AIRobotProps {
  message: string;
  onFinish: () => void;
}

export default function AIRobot({
  message,
  onFinish,
}: AIRobotProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              x: 50,
              y: 60,
              scale: 0.85,
            }
      }
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              type: "spring",
              stiffness: 160,
              damping: 20,
            }
      }
      className="
        pointer-events-none
        fixed
        inset-x-0
        bottom-3
        z-[9999]

        flex
        w-full
        max-w-full
        items-end
        justify-end
        gap-1

        px-3

        sm:inset-x-auto
        sm:bottom-5
        sm:right-5
        sm:w-auto
        sm:gap-3
        sm:px-0
      "
      style={{
        paddingBottom:
          "env(safe-area-inset-bottom, 0px)",
      }}
    >
      {/* WELCOME MESSAGE */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, x: 12 }
        }
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: reduceMotion ? 0 : 0.25,
          duration: reduceMotion ? 0 : 0.3,
        }}
        className="
          pointer-events-auto
          relative
          mb-5

          min-w-0
          w-auto
          max-w-[calc(100%-92px)]

          rounded-2xl
          border
          border-orange-500/20

          bg-white/95
          p-3.5

          shadow-2xl
          shadow-black/10

          backdrop-blur-xl

          sm:mb-7
          sm:max-w-[280px]
          sm:rounded-3xl
          sm:p-5

          dark:bg-zinc-900/95
          dark:shadow-black/40
        "
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onFinish}
          aria-label="Dismiss Union Add AI welcome message"
          title="Close welcome message"
          className="
            absolute
            right-2
            top-2

            flex
            h-8
            w-8
            items-center
            justify-center

            rounded-full

            text-zinc-500

            transition-colors

            hover:bg-zinc-100
            hover:text-zinc-900

            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-orange-500

            dark:text-zinc-400
            dark:hover:bg-zinc-800
            dark:hover:text-white
          "
        >
          <X aria-hidden="true" size={16} />
        </button>

        {/* HEADING */}
        <h3
          className="
            pr-7
            text-sm
            font-bold
            leading-5
            text-orange-600

            sm:text-lg

            dark:text-orange-400
          "
        >
          👋 Union Add AI
        </h3>

        {/* MESSAGE */}
        <p
          className="
            mt-2
            max-h-36
            overflow-y-auto

            break-words
            text-xs
            leading-5

            text-zinc-600

            sm:max-h-48
            sm:text-sm
            sm:leading-6

            dark:text-zinc-300
          "
        >
          {message}
        </p>
      </motion.div>

      {/* ANIMATED ROBOT */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? { y: 0 }
            : { y: [0, -6, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                repeat: Infinity,
                duration: 2.4,
                ease: "easeInOut",
              }
        }
        className="
          pointer-events-none
          relative
          h-[112px]
          w-[88px]
          shrink-0

          sm:h-36
          sm:w-32
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute
            inset-2

            rounded-full

            bg-orange-500/20
            blur-2xl
          "
        />

        {/* ANTENNA */}
        <div
          className="
            absolute
            left-1/2
            top-0

            h-3
            w-1

            -translate-x-1/2

            rounded-full
            bg-zinc-500

            sm:h-4
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0

            h-2
            w-2

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-orange-400
            shadow-[0_0_12px_#fb923c]
          "
        />

        {/* HEAD */}
        <div
          className="
            absolute
            left-1/2
            top-2

            h-[62px]
            w-[62px]

            -translate-x-1/2

            rounded-[20px]
            border-[3px]
            border-zinc-700

            bg-gradient-to-b
            from-zinc-200
            to-zinc-500

            shadow-xl

            sm:top-1
            sm:h-20
            sm:w-20
            sm:rounded-[26px]
            sm:border-4
          "
        >
          {/* EYES */}
          <motion.div
            animate={
              reduceMotion
                ? { scaleY: 1 }
                : { scaleY: [1, 1, 0.15, 1] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    repeat: Infinity,
                    duration: 4,
                    times: [0, 0.8, 0.9, 1],
                  }
            }
            className="
              absolute
              left-1/2
              top-[22px]

              flex
              -translate-x-1/2
              gap-3

              sm:top-7
              sm:gap-4
            "
          >
            <div
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_#22d3ee]

                sm:h-3
                sm:w-3
              "
            />

            <div
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-cyan-400
                shadow-[0_0_12px_#22d3ee]

                sm:h-3
                sm:w-3
              "
            />
          </motion.div>

          {/* MOUTH */}
          <motion.div
            animate={
              reduceMotion
                ? { width: 18 }
                : { width: [18, 10, 18] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    repeat: Infinity,
                    duration: 1,
                  }
            }
            className="
              absolute
              bottom-3
              left-1/2

              h-1
              -translate-x-1/2

              rounded-full
              bg-orange-400

              sm:bottom-4
            "
          />
        </div>

        {/* BODY */}
        <div
          className="
            absolute
            left-1/2
            top-[64px]

            h-12
            w-12

            -translate-x-1/2

            rounded-xl

            bg-gradient-to-b
            from-zinc-700
            to-zinc-900

            shadow-lg

            sm:top-20
            sm:h-16
            sm:w-16
            sm:rounded-2xl
          "
        >
          {/* AI CORE */}
          <motion.div
            animate={
              reduceMotion
                ? { scale: 1 }
                : { scale: [1, 1.2, 1] }
            }
            transition={
              reduceMotion
                ? { duration: 0 }
                : {
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeInOut",
                  }
            }
            className="
              absolute
              left-1/2
              top-1/2

              h-5
              w-5

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-orange-500
              shadow-[0_0_20px_#f97316]

              sm:h-6
              sm:w-6
            "
          />
        </div>

        {/* LEFT ARM */}
        <motion.div
          animate={
            reduceMotion
              ? { rotate: 0 }
              : { rotate: [0, -25, 0] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }
          }
          className="
            absolute
            left-0
            top-[77px]

            h-2
            w-7

            origin-right
            rounded-full
            bg-zinc-500

            sm:top-24
            sm:w-10
          "
        />

        {/* RIGHT ARM */}
        <div
          className="
            absolute
            right-0
            top-[77px]

            h-2
            w-7

            rounded-full
            bg-zinc-500

            sm:top-24
            sm:w-10
          "
        />

        {/* LEGS */}
        <div
          className="
            absolute
            bottom-0
            left-[25px]

            h-6
            w-2

            rounded-full
            bg-zinc-500

            sm:left-8
            sm:h-10
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-[25px]

            h-6
            w-2

            rounded-full
            bg-zinc-500

            sm:right-8
            sm:h-10
          "
        />
      </motion.div>
    </motion.div>
  );
}
