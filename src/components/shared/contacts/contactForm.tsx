import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants } from "./animationVariants";

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

interface ContactFormProps {
  isInView: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isInView }) => {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="lg:col-span-3"
    >
      <motion.div
        variants={itemVariants}
        className="bg-white/10 transition-all duration-300 ease-in-out border-2 border-black/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl h-full"
      >
        {isSubmitted ? (
          <SubmissionSuccess onReset={() => setIsSubmitted(false)} />
        ) : (
          <Form
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

// Success message component
interface SubmissionSuccessProps {
  onReset: () => void;
}

const SubmissionSuccess: React.FC<SubmissionSuccessProps> = ({ onReset }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="text-center py-12 sm:py-16"
      initial="hidden"
      animate="visible"
    >
      <div className="mb-6 sm:mb-8 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-400/20">
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
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
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
        Message Sent!
      </h3>
      <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto">
        Thank you for reaching out. I&apos;ll get back to you as soon as
        possible.
      </p>
      <Button
        onClick={onReset}
        className="mt-6 sm:mt-8 bg-black text-white hover:bg-white/10 hover:text-black border-2 border-black transition-all duration-300"
      >
        Send Another Message
      </Button>
    </motion.div>
  );
};

// Form component
interface FormProps {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({
  formData,
  errors,
  isSubmitting,
  handleChange,
  handleSubmit,
}) => {
  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-5 sm:space-y-6 md:space-y-8"
    >
      <motion.h2
        variants={itemVariants}
        className="text-xl sm:text-2xl md:text-3xl font-medium font-sans mb-6 sm:mb-8"
      >
        Send Me a Message
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Name Field */}
        <motion.div variants={itemVariants}>
          <label
            htmlFor="name"
            className="block text-base sm:text-lg font-medium tracking-wide text-black font-sans mb-2"
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
            } text-black placeholder-gray-500 focus:outline-none text-base sm:text-lg font-sans backdrop-blur-sm focus:border-black transition-colors duration-200`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div variants={itemVariants}>
          <label
            htmlFor="email"
            className="block text-base sm:text-lg font-medium tracking-wide text-black font-sans mb-2"
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
            } text-black placeholder-gray-500 tracking-wide font-sans text-base sm:text-lg focus:outline-none backdrop-blur-sm focus:border-black transition-colors duration-200`}
            placeholder="Your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </motion.div>
      </div>

      {/* Message Field */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="message"
          className="block text-base sm:text-lg font-medium tracking-wide text-black font-sans mb-2"
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
          } text-black tracking-wide text-base sm:text-lg placeholder-gray-500 font-sans focus:outline-none backdrop-blur-sm focus:border-black transition-colors duration-200`}
          placeholder="Your message"
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </motion.div>

      {/* Submit Button - FIXED: Now correctly centered */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center items-center mt-6"
      >
        <motion.button
          type="submit"
          className="flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-black hover:text-black border-2 rounded-xl text-white bg-black hover:bg-transparent font-medium font-sans shadow-lg tracking-wide text-base sm:text-lg transition-all duration-200"
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
  );
};

export default ContactForm;
