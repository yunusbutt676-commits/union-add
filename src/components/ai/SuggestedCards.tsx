"use client";

import {
  Globe,
  Smartphone,
  Bot,
  BarChart3,
  Palette,
  Briefcase,
} from "lucide-react";

interface Props {
  onSelect: (prompt: string) => void;
}

const cards = [
  {
    title: "Full Stack Web Development",
    description:
      "Build a modern bussiness website using modern frameworks.",
    icon: Globe,
    prompt: "I need a professional bussiness website.",
  },
  {
    title: "Full Stack App Development",
    description:
      "Android & iOS app development with React Native.",
    icon: Smartphone,
    prompt: "I want a mobile application.",
  },
  {
    title: "Digital Media Marketing",
    description:
      "Google Ads, SMM, SEO and Complete Marketing.",
    icon: BarChart3,
    prompt: "Tell me about your Digital Media Marketing Services.",
  },
  {
    title: "Brand Identity",
    description:
      "Logo, UI/UX, branding and creative design.",
    icon: Palette,
    prompt: "Help me build my brand identity.",
  },
  {
    title: "Get a Quote",
    description:
      "Receive a free quotation for your project.",
    icon: Briefcase,
    prompt: "I need a quotation for my project.",
  },
];

export default function SuggestedCards({
  onSelect,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4 max-w-6xl mx-auto">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <button
            key={card.title}
            onClick={() => onSelect(card.prompt)}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-zinc-800
              bg-zinc-900/80
              backdrop-blur-xl
              p-4
              md:p-6
              text-left
              text-sm
              md:text-base
              transition-all
              duration-300
              hover:border-orange-500
              hover:-translate-y-2
              hover:shadow-[0_15px_40px_rgba(249,115,22,.18)]
            "
          >
            {/* Glow */}

            <div
              className="
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-orange-500/10
                blur-3xl
                group-hover:bg-orange-500/20
                transition
              "
            />

            {/* Icon */}

            <div
              className="
                relative
                h-14
                w-14
                rounded-2xl
                bg-gradient-to-br
                from-orange-500
                to-yellow-500
                flex
                items-center
                justify-center
                text-white
                shadow-lg
              "
            >
              <Icon size={28} />
            </div>

            {/* Title */}

            <h3 className="mt-5 text-xl font-bold text-white">
              {card.title}
            </h3>

            {/* Description */}

            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {card.description}
            </p>

            {/* Footer */}

            <div className="mt-6 flex items-center text-orange-400 font-medium text-sm">
              Ask Union Add AI →
            </div>
          </button>
        );
      })}
    </div>
  );
}