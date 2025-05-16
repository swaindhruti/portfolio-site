"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const validationResult = FormSchema.safeParse({ name, email, message });

  if (!validationResult.success) {
    return {
      success: false,
      error: validationResult.error.errors[0]?.message || "Invalid form data",
    };
  }

  try {
    const result = await resend.emails.send({
      from: "contact@dhrutinandan.in",
      to: "dhrutinandan.dev@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return {
        success: false,
        error: "Failed to send message. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    };
  }
}
