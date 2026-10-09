"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "../lib/validations";
import toast from "react-hot-toast";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import SuccessMessage from "./SuccessMessage";
import { useRouter } from "next/navigation";

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    mode: "onBlur",
    defaultValues: {
      website: "",
      budget: {
        currency: "USD",
      },
    },
  });

  const router = useRouter();
  const [submittedData, setSubmittedData] =
    useState<QuoteFormData | null>(null);
  const [loading, setLoading] = useState(false);

  // Show success screen after successful submit
  if (submittedData) {
    return <SuccessMessage form={submittedData} />;
  }

  async function onSubmit(data: QuoteFormData) {
    if (loading) return;

    setLoading(true);

    const whatsappWindow = window.open("", "_blank");

    if (whatsappWindow) {
      whatsappWindow.document.write(`
        <html>
          <body style="font-family:Arial;text-align:center;padding:50px">
            <h2>Preparing WhatsApp message...</h2>
          </body>
        </html>
      `);
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Quote submitted successfully!");

        const whatsapp =
          `*New Quote Request*\n\n` +
          `*Name:* ${data.name}\n` +
          `*Company:* ${data.company}\n` +
          `*Email:* ${data.email}\n` +
          `*Phone:* ${data.phone}\n` +
          `*Country:* ${data.country}\n` +
          `*Service:* ${data.service}\n` +
          `*Budget:* ${data.budget.currency} ${data.budget.amount}\n` +
          `*Timeline:* ${data.timeline}\n\n` +
          `*Message:*\n${data.description}`;

        const whatsappUrl = `https://wa.me/${
          process.env.NEXT_PUBLIC_CEO_WHATSAPP
        }?text=${encodeURIComponent(whatsapp)}`;

        if (whatsappWindow) {
          whatsappWindow.location.href = whatsappUrl;
        }

        setSubmittedData(data);
      } else {
        toast.error("Unable to submit your request.");

        if (whatsappWindow) {
          whatsappWindow.close();
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error. Please try again.");

      if (whatsappWindow) {
        whatsappWindow.close();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-white py-24 dark:bg-[#070707] sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-3xl bg-white px-4 pb-6 pt-5 shadow-2xl dark:bg-[#111] sm:p-10">
          <div className="flex items-start justify-between gap-3">
            <h1 className="min-w-0 text-3xl font-bold sm:text-4xl">
              Get a Quote
            </h1>

            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-lg transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white dark:border-zinc-700 dark:bg-[#181818] dark:text-white"
            >
              <HiX size={22} />
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-7 space-y-5 sm:mt-10"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name *"
                className={`w-full min-w-0 rounded-xl p-4 text-base transition-colors dark:bg-[#1A1A1A] ${
                  errors.name
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-gray-700"
                }`}
                {...register("name")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Company Name"
                className={`w-full min-w-0 rounded-xl p-4 text-base transition-colors dark:bg-[#1A1A1A] ${
                  errors.company
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-gray-700"
                }`}
                {...register("company")}
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Business Email *"
                className={`w-full min-w-0 rounded-xl p-4 text-base transition-colors dark:bg-[#1A1A1A] ${
                  errors.email
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-gray-700"
                }`}
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number *"
                className={`w-full min-w-0 rounded-xl p-4 text-base transition-colors dark:bg-[#1A1A1A] ${
                  errors.phone
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-gray-700"
                }`}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Country *"
                className={`w-full min-w-0 rounded-xl p-4 text-base transition-colors dark:bg-[#1A1A1A] ${
                  errors.country
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-gray-700"
                }`}
                {...register("country")}
              />
              {errors.country && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <select
                  className={`w-full min-w-0 appearance-none rounded-xl border p-4 pr-12 text-base transition-colors focus:border-orange-500 focus:ring-2 focus:ring-orange-500 dark:bg-[#1A1A1A] dark:text-white ${
                    errors.budget
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                      : "border-gray-300 dark:border-gray-700"
                  }`}
                  {...register("service")}
                >
                  <option value="">Select Service *</option>
                  <option>Website Development</option>
                  <option>Mobile App Development</option>
                  <option>Digital Media Marketing</option>
                  <option>SEO</option>
                  <option>UI/UX Design</option>
                  <option>Graphic Design</option>
                  <option>Video Production</option>
                  <option>Bus Stand Branding</option>
                  <option>Floats Activity</option>
                  <option>Digital Streamers</option>
                  <option>Print Media</option>
                  <option>Media Planning</option>
                  <option>TVC Production</option>
                  <option>Media Buying on Satellite</option>
                  <option>Shop Board Branding</option>
                  <option>Bill Boards</option>
                  <option>Buss Branding</option>
                  <option>Cable Advertisement</option>
                  <option>Brand Activation & Event Management</option>
                  <option>Photoshoot & Designing</option>
                  <option>Public Relations</option>
                  <option>Giveaways</option>
                  <option>Offset Printing</option>
                </select>

                <svg
                  className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {errors.service && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-2 sm:grid-cols-3 sm:gap-4">
                <select
                  defaultValue="USD"
                  {...register("budget.currency")}
                  className="min-w-0 rounded-xl border border-gray-300 bg-white px-2 py-4 text-base dark:border-gray-700 dark:bg-[#1A1A1A] sm:p-4"
                >
                  <option value="USD">$ USD</option>
                  <option value="PKR">Rs PKR</option>
                </select>

                <input
                  type="number"
                  min={1}
                  placeholder="Budget"
                  {...register("budget.amount", {
                    valueAsNumber: true,
                    setValueAs: (v) =>
                      v === "" ? undefined : Number(v),
                  })}
                  className={`col-span-1 w-full min-w-0 rounded-xl border p-4 text-base transition-colors sm:col-span-2 dark:bg-[#1A1A1A] ${
                    errors.budget
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-gray-700"
                  }`}
                />
              </div>

              {errors.budget?.amount && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.budget.amount.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                min={10}
                placeholder="Project Timeline (Days)"
                {...register("timeline", {
                  valueAsNumber: true,
                  setValueAs: (v) =>
                    v === "" ? undefined : Number(v),
                })}
                className={`w-full min-w-0 rounded-xl p-4 text-base transition-colors dark:bg-[#1A1A1A] ${
                  errors.timeline
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-gray-700"
                }`}
              />
              {errors.timeline && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.timeline.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Tell us about your project *"
                rows={6}
                className={`w-full min-w-0 rounded-xl p-4 text-base transition-colors dark:bg-[#1A1A1A] ${
                  errors.description
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 dark:border-gray-700"
                }`}
                {...register("description")}
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full rounded-full py-4 font-semibold transition-all duration-300 ${
                loading
                  ? "cursor-not-allowed bg-gray-400 opacity-70"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      opacity=".25"
                    />
                    <path
                      d="M22 12a10 10 0 00-10-10"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Quote Request"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}