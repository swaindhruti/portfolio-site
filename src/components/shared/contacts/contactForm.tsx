import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants } from "./animationVariants";
import { sendEmail } from "@/actions/send-mails/action";
import { z } from "zod";

// Define form schema matching the server action
const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof FormSchema>;

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
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
  const [activeField, setActiveField] = useState<string | null>(null);

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
    try {
      // Use Zod to validate the form data
      FormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to our form errors format
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormErrors] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const result = await sendEmail(formDataToSend);

      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrors({
          ...errors,
          form:
            result.error || "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({
        ...errors,
        form: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 md:p-10 relative rounded-md"
      >
        <div className="absolute top-0 right-0 w-32 h-3 bg-green-400 border-l-[3px] border-b-[3px] border-black rounded-bl-md"></div>
        <div className="absolute bottom-0 left-0 w-24 h-3 bg-purple-400 border-r-[3px] border-t-[3px] border-black rounded-tr-md"></div>

        {isSubmitted ? (
          <SubmissionSuccess onReset={() => setIsSubmitted(false)} />
        ) : (
          <Form
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            activeField={activeField}
            setActiveField={setActiveField}
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
      className="text-center py-8 sm:py-12"
      initial="hidden"
      animate="visible"
    >
      <div className="mb-8 relative inline-block">
        <div className="absolute inset-0 bg-green-400 border-[2px] border-black translate-x-1 translate-y-1 rounded-md"></div>
        <div className="w-20 h-20 border-[2px] border-black bg-white flex items-center justify-center relative rounded-md">
          <svg
            className="w-10 h-10 text-black"
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
      </div>

      <h3 className="text-2xl sm:text-3xl font-bold font-heading mb-4 pl-4 pb-6 relative inline-block">
        Message Sent!
        <div className="absolute -bottom-2 left-4 right-0 h-1 bg-black"></div>
      </h3>

      <p className="text-base sm:text-lg max-w-md mx-auto mb-8">
        Thank you for reaching out. I&apos;ll get back to you as soon as
        possible.
      </p>

      <div className="relative inline-block">
        <div className="absolute inset-0 bg-blue-400 border-[2px] border-black translate-x-1 translate-y-1 transition-transform hover:translate-x-0.5 hover:translate-y-0.5 rounded-md"></div>
        <Button
          onClick={onReset}
          className="relative px-6 py-3 bg-white text-black border-[2px] border-black font-heading font-medium transition-transform hover:translate-x-[-0.5px] hover:translate-y-[-0.5px] rounded-md"
        >
          Send Another Message
        </Button>
      </div>
    </motion.div>
  );
};

// Form component
interface FormProps {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  activeField: string | null;
  setActiveField: (field: string | null) => void;
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
  activeField,
  setActiveField,
}) => {
  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 sm:space-y-8"
    >
      <motion.h2
        variants={itemVariants}
        className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-8 relative inline-block"
      >
        Send Me a Message
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black"></div>
      </motion.h2>

      {errors.form && (
        <motion.div
          variants={itemVariants}
          className="p-4 bg-red-100 border-2 border-red-500 text-red-700 rounded-md"
        >
          {errors.form}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <motion.div variants={itemVariants}>
          <label
            htmlFor="name"
            className="block text-sm sm:text-base font-bold font-heading text-black mb-2"
          >
            NAME
          </label>
          <div className="relative">
            <div
              className={`absolute inset-0 bg-yellow-400 border-[2px] border-black translate-x-1.5 translate-y-1.5 transition-all duration-200 rounded-md ${
                activeField === "name" ? "translate-x-0.5 translate-y-0.5" : ""
              }`}
            ></div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setActiveField("name")}
              onBlur={() => setActiveField(null)}
              className={`w-full px-4 py-3 border-[2px] border-black bg-white text-black placeholder-black/50 focus:outline-none relative transition-all rounded-md duration-200 ${
                activeField === "name"
                  ? "translate-x-[-0.5px] translate-y-[-0.5px]"
                  : ""
              } ${errors.name ? "border-red-500 bg-red-50" : ""}`}
              placeholder="Your name"
            />
          </div>
          {errors.name && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {errors.name}
            </p>
          )}
        </motion.div>

        {/* Email Field */}
        <motion.div variants={itemVariants}>
          <label
            htmlFor="email"
            className="block text-sm sm:text-base font-bold font-heading text-black mb-2"
          >
            EMAIL
          </label>
          <div className="relative">
            <div
              className={`absolute inset-0 bg-blue-400 border-[2px] border-black translate-x-1.5 translate-y-1.5 transition-all duration-200 rounded-md ${
                activeField === "email" ? "translate-x-0.5 translate-y-0.5" : ""
              }`}
            ></div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField(null)}
              className={`w-full px-4 py-3 border-[2px] border-black bg-white text-black placeholder-black/50 focus:outline-none relative transition-all duration-200 rounded-md ${
                activeField === "email"
                  ? "translate-x-[-0.5px] translate-y-[-0.5px]"
                  : ""
              } ${errors.email ? "border-red-500 bg-red-50" : ""}`}
              placeholder="Your email"
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm font-medium text-red-500">
              {errors.email}
            </p>
          )}
        </motion.div>
      </div>

      {/* Message Field */}
      <motion.div variants={itemVariants}>
        <label
          htmlFor="message"
          className="block text-sm sm:text-base font-bold font-heading text-black mb-2"
        >
          MESSAGE
        </label>
        <div className="relative">
          <div
            className={`absolute inset-0 bg-red-400 border-[2px] border-black translate-x-1.5 translate-y-1.5 transition-all duration-200 rounded-md ${
              activeField === "message" ? "translate-x-0.5 translate-y-0.5" : ""
            }`}
          ></div>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            onFocus={() => setActiveField("message")}
            onBlur={() => setActiveField(null)}
            className={`w-full px-4 py-3 border-[2px] border-black bg-white text-black placeholder-black/50 focus:outline-none rounded-md relative transition-all duration-200 ${
              activeField === "message"
                ? "translate-x-[-0.5px] translate-y-[-0.5px]"
                : ""
            } ${errors.message ? "border-red-500 bg-red-50" : ""}`}
            placeholder="Your message"
          ></textarea>
        </div>
        {errors.message && (
          <p className="mt-2 text-sm font-medium text-red-500">
            {errors.message}
          </p>
        )}
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={itemVariants} className="flex justify-center mt-8">
        <div className="relative group hover:cursor-pointer">
          <div className="absolute inset-0 bg-green-400 border-[2px] border-black translate-x-1.5 translate-y-1.5 transition-all duration-150 ease-in-out rounded-md group-hover:translate-x-0.5 group-hover:translate-y-0.5"></div>
          <motion.button
            type="submit"
            className="relative flex items-center justify-center px-8 py-3 border-[2px] border-black text-black bg-white font-bold font-heading transition-all duration-150 ease-in-out rounded-md group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] group-hover:shadow-none"
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-t-2 border-r-2 border-black rounded-full animate-spin"></div>
                <span>SENDING...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <span>SEND MESSAGE</span>
                <Send className="h-5 w-5" />
              </div>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
