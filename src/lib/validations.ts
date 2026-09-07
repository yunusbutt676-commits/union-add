import { z } from "zod";

const phoneRegex = /^\+?[1-9]\d{7,14}$/;

const nameRegex =
  /^[A-Za-zÀ-ÿ\s.'-]+$/;

export const quoteSchema = z
  .object({

    name: z
      .string()
      .trim()
      .min(
        3,
        "Full name must be at least 3 characters."
      )
      .max(
        60,
        "Full name cannot exceed 60 characters."
      )
      .regex(
        nameRegex,
        "Name contains invalid characters."
      ),

    company: z
      .string()
      .trim()
      .max(
        100,
        "Company name cannot exceed 100 characters."
      )
      .optional()
      .or(z.literal("")),

    email: z
      .string()
      .trim()
      .toLowerCase()
      .email(
        "Please enter a valid email address."
      )
      .max(
        254,
        "Email address is too long."
      ),

    phone: z
      .string()
      .trim()
      .regex(
        phoneRegex,
        "Please enter a valid international phone number."
      )
      .min(
        8,
        "Phone number is too short."
      )
      .max(
        16,
        "Phone number is too long."
      )
      .refine(
        (value) =>
          !/(.)\1{6,}/.test(value),
        {
          message:
            "Phone number appears to be invalid.",
        }
      )
      .optional()
      .or(z.literal("")),

    country: z
      .string()
      .trim()
      .max(100)
      .optional()
      .or(z.literal("")),

    service: z
      .enum([
        "Website Development",
        "Mobile App Development",
        "UI/UX Design",
        "Digital Media Marketing",
        "SEO",
        "Google Ads",
        "Meta Ads",       
        "Branding",       
        "Graphic Design",   
        "Bus Stand Branding",
        "Floats Activity",
        "Digital Streamers",
        "Print Media",
        "Outdoor Advertisement",
        "Media Planning",
        "TVC Production",
        "Media Buying on Satellite",
        "Shop Board Branding",
        "Bill Boards",
        "Buss Branding",
        "Cable Advertisement",
        "Brand Activation & Event Management",
        "Digital Printing",
        "Video Production",
        "Photoshoot & Designing",
        "Public Relations",
        "Giveaways",
        "Offset Printing",
      ])
      .optional(),

    budget: z
      .object({
        currency: z.enum([
          "PKR",
          "USD",
        ]),

        amount: z
          .number({
            invalid_type_error:
              "Budget must be a number.",
          })
          .positive(
            "Budget must be greater than 0."
          ),
      })
      .superRefine(
        (budget, ctx) => {
          if (
            budget.currency ===
              "USD" &&
            budget.amount < 100
          ) {
            ctx.addIssue({
              code:
                z.ZodIssueCode.custom,
              path: ["amount"],
              message:
                "Minimum budget is $100 USD.",
            });
          }

          if (
            budget.currency ===
              "PKR" &&
            budget.amount < 2000
          ) {
            ctx.addIssue({
              code:
                z.ZodIssueCode.custom,
              path: ["amount"],
              message:
                "Minimum budget is Rs. 2,000 PKR.",
            });
          }
        }
      ),

    timeline: z
      .number({
        invalid_type_error:
          "Timeline must be a number of days.",
      })
      .int(
        "Timeline must be a whole number."
      )
      .min(
        10,
        "Minimum project timeline is 10 days."
      )
      .max(
        365,
        "Timeline cannot exceed 365 days."
      ),

    description: z
      .string()
      .trim()
      .min(
        20,
        "Please provide at least 20 characters."
      )
      .max(
        3000,
        "Project description cannot exceed 3000 characters."
      ),

    website: z
      .string()
      .max(0)
      .optional()
      .default(""),
  })
  .superRefine((data, ctx) => {

    if (
      data.company &&
      data.company.toLowerCase() ===
        data.name.toLowerCase()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["company"],
        message:
          "Company name cannot be the same as your name.",
      });
    }

    if (
      data.budget.currency ===
        "USD" &&
      data.budget.amount >= 50000 &&
      !data.phone
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message:
          "Phone number is required for enterprise projects.",
      });
    }

    if (
      data.budget.currency ===
        "PKR" &&
      data.budget.amount >=
        10000000 &&
      !data.phone
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message:
          "Phone number is required for enterprise projects.",
      });
    }

    const spamWords = [
      "casino",
      "bitcoin",
      "viagra",
      "loan",
      "backlinks",
      "porn",
      "crypto",
      "gambling",
      "forex",
      "seo services",
    ];

    if (
      spamWords.some((word) =>
        data.description
          .toLowerCase()
          .includes(word)
      )
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["description"],
        message:
          "Your message appears to contain prohibited content.",
      });
    }

    const fakeNames = [
      "admin",
      "administrator",
      "test",
      "testing",
      "unknown",
      "guest",
      "null",
      "user",
    ];

    if (
      fakeNames.includes(
        data.name
          .toLowerCase()
          .trim()
      )
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["name"],
        message:
          "Please enter your real name.",
      });
    }
  });

export type QuoteFormData = z.infer<
  typeof quoteSchema
>;