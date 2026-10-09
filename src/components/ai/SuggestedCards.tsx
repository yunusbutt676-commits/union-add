
"use client";

import {
  Globe,
  Smartphone,
  BarChart3,
  Palette,
  Briefcase,
  ArrowRight,
} from "lucide-react";

interface Props {
  onSelect: (prompt: string) => void;
}

const cards = [
  {
    title: "Full Stack Web Development",
    description:
      "Build modern, professional business websites and web applications using modern frameworks.",
    icon: Globe,
    prompt: "I need a professional business website.",
  },
  {
    title: "Full Stack App Development",
    description:
      "Professional Android and iOS mobile application development using React Native.",
    icon: Smartphone,
    prompt: "I want a mobile application.",
  },
  {
    title: "Digital Media Marketing",
    description:
      "Google Ads, social media marketing, SEO, and complete digital marketing solutions.",
    icon: BarChart3,
    prompt:
      "Tell me about your Digital Media Marketing Services.",
  },
  {
    title: "Brand Identity",
    description:
      "Professional logo design, UI/UX, branding, and creative design solutions.",
    icon: Palette,
    prompt: "Help me build my brand identity.",
  },
  {
    title: "Get a Quote",
    description:
      "Request a free quotation tailored to your business or project requirements.",
    icon: Briefcase,
    prompt: "I need a quotation for my project.",
  },
] as const;

export default function SuggestedCards({
  onSelect,
}: Props) {
  return (
    <div
      role="group"
      aria-label="Suggested questions for Union Add AI assistant"
      className="
        mx-auto
        grid
        w-full
        min-w-0
        max-w-6xl

        grid-cols-1
        gap-3

        sm:grid-cols-2
        sm:gap-4

        xl:grid-cols-3
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <button
            key={card.title}
            type="button"
            onClick={() => onSelect(card.prompt)}
            aria-label={`Ask Union Add AI about ${card.title}`}
            className="
              group
              relative
              flex
              min-w-0
              w-full
              flex-col
              overflow-hidden

              rounded-2xl
              border
              border-gray-200

              bg-white/90
              backdrop-blur-xl

              p-4
              text-left

              shadow-sm

              transition-all
              duration-300
              ease-out

              hover:border-orange-500
              hover:shadow-[0_15px_40px_rgba(249,115,22,.12)]

              active:scale-[0.98]

              focus-visible:outline-2
              focus-visible:outline-offset-3
              focus-visible:outline-orange-500

              sm:rounded-3xl
              sm:p-5

              md:p-6
              md:hover:-translate-y-1.5

              dark:border-zinc-800
              dark:bg-zinc-900/80
              dark:hover:border-orange-500
              dark:hover:shadow-[0_15px_40px_rgba(249,115,22,.18)]

              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          >
            {/* BACKGROUND GLOW */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10

                h-28
                w-28

                rounded-full
                bg-orange-500/10
                blur-3xl

                transition-colors
                duration-300

                group-hover:bg-orange-500/20

                sm:h-32
                sm:w-32
              "
            />

            {/* ICON */}
            <div
              aria-hidden="true"
              className="
                relative
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-xl

                bg-gradient-to-br
                from-orange-500
                to-yellow-500

                text-white

                shadow-lg
                shadow-orange-500/15

                sm:h-14
                sm:w-14
                sm:rounded-2xl
              "
            >
              <Icon
                size={26}
                strokeWidth={1.9}
                className="
                  h-6
                  w-6
                  sm:h-7
                  sm:w-7
                "
              />
            </div>

            {/* TITLE */}
            <h3
              className="
                relative
                mt-4
                break-words

                text-base
                font-bold
                leading-snug

                text-gray-950

                sm:mt-5
                sm:text-lg

                md:text-xl

                dark:text-white
              "
            >
              {card.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                relative
                mt-2
                flex-1

                text-sm
                leading-6

                text-gray-600

                sm:mt-3

                dark:text-zinc-400
              "
            >
              {card.description}
            </p>

            {/* CTA */}
            <div
              aria-hidden="true"
              className="
                relative
                mt-5

                flex
                items-center
                gap-2

                text-sm
                font-semibold

                text-orange-600
                dark:text-orange-400

                sm:mt-6
              "
            >
              <span>Ask Union Add AI</span>

              <ArrowRight
                size={17}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  motion-reduce:transform-none
                "
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}
