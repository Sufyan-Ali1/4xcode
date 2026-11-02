"use server";

import { getConfig } from "./blogApi";

interface ContactPayload {
  name: string;
  email: string;
  number: string;
  details: string;
}

export async function submitContactForm(formData: ContactPayload) {
  try {
    const { base, auth } = getConfig(false);

    const backendPayload = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
      project_detail: formData.details,
    };

    const res = await fetch(`${base}/contact-queries/submit/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(auth ? { Authorization: auth } : {}),
      },
      body: JSON.stringify(backendPayload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Backend Submission Error Status:", res.status, errorText);
      return { success: false, status: res.status };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Contact Error:", error);
    return { success: false, status: 500 };
  }
}
