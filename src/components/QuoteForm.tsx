"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  quoteSchema,
  type QuoteFormData,
} from "../lib/validations";
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
    <section className="min-h-screen bg-white dark:bg-[#070707] py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white dark:bg-[#111] rounded-3xl p-10 shadow-2xl">
          <h1 className="text-4xl font-bold mb-1">
            Get a Quote
          </h1>
           
          <div className="relative pt-10">
            <button
              type="button"
              onClick={() => router.back()}
              className="
                absolute
                -top-10
                right-0
                h-11
                w-11
                rounded-full
                bg-white
                dark:bg-[#181818]
                border
                border-gray-200
                dark:border-zinc-700
                shadow-lg
                flex
                items-center
                justify-center
                text-black
                dark:text-white
                hover:bg-orange-500
                hover:border-orange-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              <HiX size={22} />
            </button>

         <div className="max-w-3xl mx-auto px-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <input
                type="text"
                placeholder="Full Name *"
                className={`w-full rounded-xl p-4 dark:bg-[#1A1A1A] transition-colors ${
                  errors.name
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                }`}
                {...register("name")}
              />
              
              {errors.name && (
              <p className="text-red-500 text-sm mt-1">
              {errors.name.message}
              </p>
              )}

              <input
                type="text"
                placeholder="Company Name"
                className={`w-full rounded-xl p-4 dark:bg-[#1A1A1A] transition-colors ${
                  errors.company
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                }`}
                 {...register("company")}              
              />
              
              {errors.company && (
              <p className="text-red-500 text-sm mt-1">
              {errors.company.message}
              </p>
              )}

              <input
                type="email"
                placeholder="Business Email *"
                className={`w-full rounded-xl p-4 dark:bg-[#1A1A1A] transition-colors ${
                  errors.email
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                }`}
                 {...register("email")}
              />
              
              {errors.email && (
              <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
              </p>
              )}

              <input
                type="tel"
                placeholder="Phone Number *"
                className={`w-full rounded-xl p-4 dark:bg-[#1A1A1A] transition-colors ${
                  errors.phone
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                }`}
                 {...register("phone")}
              />
              
              {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
              </p>
              )}

              <input
                type="text"
                placeholder="Country *"
                className={`w-full rounded-xl p-4 dark:bg-[#1A1A1A] transition-colors ${
                  errors.country
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                }`}
                 {...register("country")}
              />
              
              {errors.country && (
              <p className="text-red-500 text-sm mt-1">
              {errors.country.message}
              </p>
              )}

              <div className="relative">
              <select
                className={`w-full
                            border
                            rounded-xl
                            p-4
                            pr-12
                            appearance-none
                            dark:bg-[#1A1A1A]
                            dark:border-gray-700
                            dark:text-white
                            focus:ring-2
                            focus:ring-orange-500
                            focus:border-orange-500
                            transition-colors ${
                    errors.budget
                      ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
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
                
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">
                  {errors.service.message}
                  </p>
                )}
                
                <svg
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    h-5
                    text-gray-500
                    pointer-events-none
                  "
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

              <div className="grid grid-cols-3 gap-4">
                <select
                  defaultValue="USD"
                  {...register("budget.currency")}
                  className="border rounded-xl p-4 dark:bg-[#1A1A1A] dark:border-gray-700"
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
                  className={`col-span-2 w-full border rounded-xl p-4 dark:bg-[#1A1A1A] transition-colors ${
                    errors.budget
                      ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  }`}
                />
              </div>

              {errors.budget?.amount && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.budget.amount.message}
                </p>
              )}

              <input
                type="number"
                min={10}
                placeholder="Project Timeline (Days)"
                {...register("timeline", {
                  valueAsNumber: true,
                  setValueAs: (v) =>
                    v === "" ? undefined : Number(v),
                })}
                className={`w-full rounded-xl p-4 dark:bg-[#1A1A1A] transition-colors ${
                  errors.timeline
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                }`}
              />

              {errors.timeline && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.timeline.message}
                </p>
              )}

              <textarea
                placeholder="Tell us about your project *"
                rows={6}
                className={`w-full rounded-xl p-4 dark:bg-[#1A1A1A] transition-colors ${
                  errors.description
                    ? "border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border border-gray-300 dark:border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                }`}
                 {...register("description")}
              />

              {errors.description && (
              <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
              </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`
                  w-full
                  rounded-full
                  py-4
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed opacity-70"
                      : "bg-orange-500 hover:bg-orange-600 text-white"
                  }
                `}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg
                      className="animate-spin h-5 w-5"
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
        </div>
      </div>
    </section>
  );
}