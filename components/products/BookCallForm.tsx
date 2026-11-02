"use client"
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

const labelClass = "mb-2 block text-[11px] font-semibold text-white";

const inputClass =
  "h-[38px] w-full rounded-[6px] border border-[#8f8f8f] bg-[#323235] px-3 text-[12px] text-white placeholder:text-[#8a8a8a] outline-none transition focus:border-[#e8141c]";

const BookCallForm: React.FC = () => {
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
    <section className="w-full mt-10 bg-black">
      <div className="mx-auto w-full max-w-[1150px]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[12px] border border-[#1d1d1d] bg-[#1c1c1c] p-5 sm:p-6 md:px-5 md:py-5"
        >
          {/* Heading */}
          <h2 className="text-[20px] font-semibold leading-tight text-white">
            Book a 30-Minute Call
          </h2>
          <p className="mt-2 text-[11px] text-[#e5e5e5]">
            Fill out the details below to schedule a consultation.
          </p>

          {/* Fields */}
          <div className="mt-6 grid grid-cols-1 gap-x-[10px] gap-y-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="liveDate" className={labelClass}>
                When do you need it live?
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
                placeholder="Select a date"
                className={`${inputClass} [color-scheme:dark]`}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Anything that would make the call useful?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="h-[80px] w-full resize-none rounded-[6px] border border-[#8f8f8f] bg-[#323235] px-3 py-2 text-[12px] text-white placeholder:text-[#8a8a8a] outline-none transition focus:border-[#e8141c]"
              />
            </div>
          </div>

          {/* Button */}
          <div className="mt-6 flex md:justify-end">
            <button
              type="submit"
              className="h-[40px] w-full rounded-[6px] bg-[#9b0f1a] text-[13px] font-medium text-white transition hover:bg-[#b3121f] md:w-[200px]"
            >
              Book a 30-Minute Call
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookCallForm;