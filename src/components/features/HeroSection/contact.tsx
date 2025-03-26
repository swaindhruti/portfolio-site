"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send } from "lucide-react";
import { useRef } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const ContactSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={sectionRef} className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl text-black font-borel mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 font-sans max-w-2xl mx-auto"
          >
            Have a question or want to work together? Drop me a message and
            I&apos;ll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white/10 transition-all duration-300 ease-in-out border-2 border-black/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {isSubmitted ? (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
              initial="hidden"
              animate="visible"
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-400/20">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-blue-100">
                Your message has been sent successfully. I&apos;ll get back to
                you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="name"
                    className="block text-xl font-semibold tracking-wide text-black font-sans mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border-2 ${
                      errors.name ? "border-red-400" : "border-black/30"
                    } text-black placeholder-gray-600 focus:outline-none text-lg font-sans tracking-wide backdrop-blur-sm focus:border-black`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-xl font-semibold tracking-wide text-black font-sans mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border-2 ${
                      errors.email ? "border-red-400" : "border-black/30"
                    } text-black placeholder-gray-600 tracking-wide font-sans text-lg focus:outline-none  backdrop-blur-sm focus:border-black`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-xl font-semibold tracking-wide text-black font-sans mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border-2 ${
                    errors.message ? "border-red-400" : "border-black/30"
                  } text-black tracking-wide text-lg placeholder-gray-600 font-sans focus:outline-none  backdrop-blur-sm focus:border-black`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-4 border-black hover:text-black border-2 rounded-xl text-white bg-black hover:bg-transparent font-medium font-sans shadow-lg tracking-wide text-lg transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
