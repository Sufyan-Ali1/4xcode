"use client"
import garage from "@/data/GarageManagementPage.json";
import React, { useRef, useState } from "react";
import { submitContactForm } from "@/lib/contactFormApi";
import { useRouter } from "next/navigation";
import styles from "./BookCallForm.module.css";

interface BookCallFormData {
  name: string;
  email: string;
  phone: string;
  liveDate: string;
  message: string;
}

const INITIAL_DATA: BookCallFormData = {
  name: "",
  email: "",
  phone: "",
  liveDate: "",
  message: "",
};

const labelClass = "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-zinc-500";

const inputClass =
  `${styles.input} h-11 w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-3.5 text-xs text-white placeholder:text-zinc-600 outline-none transition-colors duration-200 focus:border-[#f51d31]/40 sm:text-sm`;

const BookCallForm = ({ data = garage.form }: { data?: typeof garage.form }) => {
  const router = useRouter();
  const [formData, setFormData] = useState<BookCallFormData>(INITIAL_DATA);
  const submitting = useRef(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setError("");
    setPending(true);
    const details = [
      "Garage Management System enquiry",
      formData.message.trim(),
      formData.liveDate
        ? `I want this project live on ${new Date(`${formData.liveDate}T12:00:00`).toLocaleDateString("en-US", { dateStyle: "long" })}.`
        : "",
    ].filter(Boolean).join("\n\n");

    try {
      const response = await submitContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        number: formData.phone.trim(),
        details,
      });
      if (!response.success) {
        setError("We couldn’t send your enquiry. Please try again. Your details have been kept.");
        return;
      }
      setFormData(INITIAL_DATA);
      window.sessionStorage.setItem("form_submitted", "true");
      router.push("/thank-you");
    } catch {
      setError("We couldn’t send your enquiry. Please try again. Your details have been kept.");
    } finally {
      submitting.current = false;
      setPending(false);
    }
  };

  return (
    <section className="w-full mt-10">
      <div className="relative isolate mx-auto w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[#f90a1f]/5 opacity-30 blur-xl md:rounded-[32px] md:bg-[#f90a1f]/10 md:blur-2xl"
        />
        <form
          onSubmit={handleSubmit}
          className="relative isolate overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 shadow-xl backdrop-blur-xl sm:p-8 md:rounded-[32px] md:border-white/10 md:bg-white/[0.04]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-white/[0.06] via-transparent to-transparent"
          />
          {/* Heading */}
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
            {data.heading}
          </h2>
          <p className="mt-3 text-xs leading-relaxed text-zinc-500 sm:text-sm">
            {data.description}
          </p>

          {/* Fields */}
          <fieldset disabled={pending} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <legend className="sr-only">Your contact and project details</legend>
            <div>
              <label htmlFor="name" className={labelClass}>
                {data.fields.name.label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                pattern={".*\\S.*"}
                value={formData.name}
                onChange={handleChange}
                placeholder={data.fields.name.placeholder}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                {data.fields.email.label}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={data.fields.email.placeholder}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                {data.fields.phone.label}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                pattern={".*\\S.*"}
                value={formData.phone}
                onChange={handleChange}
                placeholder={data.fields.phone.placeholder}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="liveDate" className={labelClass}>
                {data.fields.liveDate.label}
              </label>
              <input
                id="liveDate"
                name="liveDate"
                type="date"
                value={formData.liveDate}
                onChange={handleChange}
                placeholder={data.fields.liveDate.placeholder}
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className={labelClass}>
                {data.fields.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={data.fields.message.placeholder}
                className={`${inputClass} min-h-24 resize-none py-3`}
              />
            </div>
          </fieldset>

          {/* Button */}
          {error && <p role="alert" className="mt-6 text-sm text-red-300">{error}</p>}
          <div className="mt-6 flex md:justify-end">
            <button
              type="submit"
              disabled={pending}
              className="h-11 w-full cursor-pointer rounded-lg bg-[#f51d31] px-6 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#ed1c20] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f51d31] disabled:cursor-wait disabled:opacity-60 md:w-[200px]"
            >
              {pending ? "Sending enquiry…" : data.button}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookCallForm;
