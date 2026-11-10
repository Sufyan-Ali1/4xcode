"use client"
import garage from "@/data/GarageManagementPage.json";
import React, { useState } from "react";

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
  "h-11 w-full min-w-0 rounded-lg border border-white/5 bg-black/40 px-3.5 text-xs text-white placeholder:text-zinc-600 outline-none transition-colors duration-200 focus:border-[#f51d31]/40 sm:text-sm";

const BookCallForm = ({ data = garage.form }: { data?: typeof garage.form }) => {
  const [formData, setFormData] = useState<BookCallFormData>(INITIAL_DATA);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    setFormData(INITIAL_DATA);
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
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                {data.fields.name.label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
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
                type="text"
                value={formData.liveDate}
                onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  if (!e.target.value) e.target.type = "text";
                }}
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
          </div>

          {/* Button */}
          <div className="mt-6 flex md:justify-end">
            <button
              type="submit"
              className="h-11 w-full cursor-pointer rounded-lg bg-[#f51d31] px-6 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-[#ed1c20] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f51d31] md:w-[200px]"
            >
              {data.button}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookCallForm;