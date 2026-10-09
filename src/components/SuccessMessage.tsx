
"use client";

import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

interface SuccessMessageProps {
  form: {
    name: string;
    company?: string;
    email: string;
    phone?: string;
    country?: string;
    service?: string;
    budget: {
      currency: "USD" | "PKR";
      amount: number;
    };
    timeline: number;
    description: string;
    website?: string;
  };
}

const REDIRECT_SECONDS = 30;

export default function SuccessMessage({
  form,
}: SuccessMessageProps) {
  const router = useRouter();
  const [seconds, setSeconds] = useState(REDIRECT_SECONDS);

  const whatsappUrl = useMemo(() => {
    const phone = (
      process.env.NEXT_PUBLIC_CEO_WHATSAPP ?? ""
    ).replace(/\D/g, "");

    if (!phone) return null;

    const budget = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: form.budget.currency,
      maximumFractionDigits: 0,
    }).format(form.budget.amount);

    const message = [
      "*New Quote Request*",
      "",
      `*Name:* ${form.name}`,
      `*Company:* ${form.company || "Not provided"}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone || "Not provided"}`,
      `*Country:* ${form.country || "Not provided"}`,
      `*Service:* ${form.service || "Not specified"}`,
      `*Budget:* ${budget}`,
      `*Timeline:* ${form.timeline}`,
      `*Website:* ${form.website || "Not provided"}`,
      "",
      "*Project Description:*",
      form.description,
    ].join("\n");

    return `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
  }, [form]);

  useEffect(() => {
    if (seconds <= 0) {
      router.replace("/");
      return;
    }

    const timer = window.setTimeout(() => {
      setSeconds((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [seconds, router]);

  const progress =
    ((REDIRECT_SECONDS - seconds) / REDIRECT_SECONDS) * 100;

  return (
    <section
      aria-labelledby="quote-success-heading"
      className="
        flex
        min-h-screen
        w-full
        min-w-0
        items-center
        justify-center
        overflow-x-clip

        bg-gradient-to-br
        from-white
        via-[#FAFAFA]
        to-[#FFF7F2]

        px-4
        py-24

        sm:px-6
        sm:py-28

        lg:px-8

        dark:from-[#070707]
        dark:via-[#0D0D0D]
        dark:to-[#151515]
      "
    >
      <div
        className="
          w-full
          min-w-0
          max-w-3xl

          rounded-2xl
          border
          border-gray-200

          bg-white/90

          px-5
          py-8

          text-center

          shadow-xl
          backdrop-blur-xl

          sm:rounded-[28px]
          sm:px-8
          sm:py-10

          md:rounded-[32px]
          md:p-14

          dark:border-zinc-800
          dark:bg-[#111]/90
          dark:shadow-black/30
        "
      >
        {/* SUCCESS BADGE */}
        <div
          className="
            mb-6
            inline-flex
            max-w-full
            items-center
            justify-center
            gap-2

            rounded-full

            bg-green-100

            px-4
            py-2

            text-xs
            font-semibold
            text-green-700

            sm:mb-8
            sm:px-5
            sm:text-sm

            dark:bg-green-900/20
            dark:text-green-400
          "
        >
          <HiCheckCircle
            aria-hidden="true"
            className="shrink-0 text-base"
          />

          <span>Quote Request Submitted</span>
        </div>

        {/* SUCCESS ICON */}
        <HiCheckCircle
          aria-hidden="true"
          className="
            mx-auto
            mb-6

            text-6xl
            text-green-500

            sm:mb-8
            sm:text-7xl

            md:text-8xl
          "
        />

        {/* HEADING */}
        <h1
          id="quote-success-heading"
          className="
            break-words

            text-3xl
            font-bold
            leading-tight
            tracking-tight

            text-gray-950

            sm:text-4xl
            md:text-5xl
            lg:text-6xl

            dark:text-white
          "
        >
          Thank You
          {form.name ? `, ${form.name}` : ""}!
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-6
            max-w-2xl

            text-sm
            leading-7

            text-gray-600

            sm:mt-8
            sm:text-base
            sm:leading-8

            md:text-lg
            md:leading-9

            dark:text-gray-300
          "
        >
          Your quote request has been received successfully.
          {" "}
          Our team will carefully review your project
          requirements and contact you within{" "}
          <span className="font-semibold text-orange-500">
            24 business hours.
          </span>
        </p>

        {/* REDIRECT PROGRESS */}
        <div
          className="
            mx-auto
            mt-8
            max-w-xl

            sm:mt-10
          "
        >
          <div
            role="progressbar"
            aria-label="Time until homepage redirect"
            aria-valuemin={0}
            aria-valuemax={REDIRECT_SECONDS}
            aria-valuenow={REDIRECT_SECONDS - seconds}
            className="
              h-2
              overflow-hidden
              rounded-full

              bg-gray-200
              dark:bg-zinc-800
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-orange-500

                transition-[width]
                duration-1000
                ease-linear

                motion-reduce:transition-none
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <p
            className="
              mt-4
              text-xs
              text-gray-500

              sm:text-sm

              dark:text-gray-400
            "
          >
            Redirecting to Home in{" "}
            <span
              className="
                font-semibold
                tabular-nums
                text-orange-500
              "
            >
              {seconds}s
            </span>
          </p>
        </div>

        {/* WHAT HAPPENS NEXT */}
        <div
          className="
            mt-8
            rounded-2xl

            border
            border-gray-200

            bg-gray-50

            p-5
            text-left

            sm:mt-10
            sm:p-6

            dark:border-zinc-800
            dark:bg-[#181818]
          "
        >
          <h2
            className="
              mb-4
              text-base
              font-semibold

              text-gray-950

              sm:text-lg

              dark:text-white
            "
          >
            What happens next?
          </h2>

          <ul
            className="
              space-y-3
              text-sm
              leading-6

              text-gray-600

              sm:text-base
              sm:leading-7

              dark:text-gray-300
            "
          >
            <li className="flex items-start gap-3">
              <HiCheckCircle
                aria-hidden="true"
                className="
                  mt-1
                  shrink-0
                  text-green-500
                "
              />
              <span>
                Your request has been securely received.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <HiCheckCircle
                aria-hidden="true"
                className="
                  mt-1
                  shrink-0
                  text-green-500
                "
              />
              <span>
                Our experts will review your project requirements.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <HiCheckCircle
                aria-hidden="true"
                className="
                  mt-1
                  shrink-0
                  text-green-500
                "
              />
              <span>
                We'll contact you within 24 business hours.
              </span>
            </li>
          </ul>
        </div>

        {/* ACTION BUTTONS */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            justify-center
            gap-3

            sm:mt-12
            sm:flex-row
            sm:flex-wrap
            sm:gap-4
          "
        >
          {/* WHATSAPP - MOBILE */}
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                min-h-12
                w-full
                items-center
                justify-center

                rounded-full

                bg-green-600

                px-5
                py-3

                text-center
                text-sm
                font-semibold
                text-white

                transition-all
                duration-300

                hover:bg-green-700

                active:scale-[0.98]

                focus-visible:outline-2
                focus-visible:outline-offset-3
                focus-visible:outline-green-500

                sm:hidden
              "
            >
              Continue on WhatsApp
            </a>
          )}

          {/* HOME */}
          <Link
            href="/"
            className="
              flex
              min-h-12
              w-full
              items-center
              justify-center

              rounded-full

              bg-[#071A2E]

              px-6
              py-3

              text-center
              text-sm
              font-semibold
              text-white

              transition-all
              duration-300

              hover:bg-orange-500

              active:scale-[0.98]

              focus-visible:outline-2
              focus-visible:outline-offset-3
              focus-visible:outline-orange-500

              sm:w-auto
              sm:px-8
              sm:text-base
            "
          >
            Back to Home
          </Link>

          {/* SERVICES */}
          <Link
            href="/services"
            className="
              flex
              min-h-12
              w-full
              items-center
              justify-center

              rounded-full

              border
              border-gray-300

              px-6
              py-3

              text-center
              text-sm
              font-semibold

              text-gray-900

              transition-all
              duration-300

              hover:border-orange-500
              hover:text-orange-500

              active:scale-[0.98]

              focus-visible:outline-2
              focus-visible:outline-offset-3
              focus-visible:outline-orange-500

              sm:w-auto
              sm:px-8
              sm:text-base

              dark:border-zinc-700
              dark:text-white
              dark:hover:text-orange-400
            "
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
