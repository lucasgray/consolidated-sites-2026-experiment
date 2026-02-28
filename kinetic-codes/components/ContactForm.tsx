"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      reset();

      // Fire GA4 conversion event
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "contact_form_submit", {
          event_category: "engagement",
          event_label: "Contact Form",
        });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email directly.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-background border border-neon-lime/30 rounded-xl text-center"
      >
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-neon-lime mb-2">Message Sent!</h3>
        <p className="text-muted">Thanks! I&apos;ll respond within 24 hours.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-neon-cyan hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Name *
        </label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-background border border-muted/30 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email *
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-background border border-muted/30 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
          placeholder="you@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
          Company
        </label>
        <input
          {...register("company")}
          type="text"
          id="company"
          className="w-full px-4 py-3 bg-background border border-muted/30 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors"
          placeholder="Your company (optional)"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          className="w-full px-4 py-3 bg-background border border-muted/30 rounded-lg text-foreground placeholder:text-muted/50 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-colors resize-none"
          placeholder="Tell me about your project or challenge..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-neon-cyan text-background font-bold rounded-lg hover:shadow-[0_0_30px_var(--neon-cyan)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </form>
  );
}
