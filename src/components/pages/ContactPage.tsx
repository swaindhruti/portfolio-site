"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactInfo from "@/components/shared/contacts/contactInfo";
import ContactForm from "@/components/shared/contacts/contactForm";
import { itemVariants } from "@/components/shared/contacts/animationVariants";

const ContactPage = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const isPageInView = useInView(pageRef, { once: true, amount: 0.1 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  return (
    <main
      ref={pageRef}
      className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
    >
      {/* Neo-brutalist Page Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-yellow-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate={isPageInView ? "visible" : "hidden"}
            className="relative border-[3px] border-black bg-white font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-6 py-3 text-black rounded-md"
          >
            GET IN TOUCH
          </motion.h1>
        </div>
      </div>

      {/* Neo-brutalist Two-Column Layout for Contact Info and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
        {/* Contact Information - Left Side with Neo-brutalist styling */}
        <div className="lg:col-span-2 relative">
          <div className="absolute inset-0 bg-purple-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
          <div className="relative border-[3px] border-black bg-white p-4 sm:p-6 rounded-md">
            <ContactInfo isInView={isPageInView} />
          </div>
        </div>

        {/* Contact Form - Right Side with Neo-brutalist styling */}
        <div ref={formRef} className="lg:col-span-3 relative">
          <div className="absolute inset-0 bg-green-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
          <div className="relative border-[3px] border-black bg-white p-4 sm:p-6 rounded-md">
            <div className="absolute top-0 right-0 w-12 h-3 bg-blue-400 border-l-[3px] border-b-[3px] border-black rounded-bl-md"></div>
            <ContactForm isInView={isFormInView} />
          </div>
        </div>
      </div>

      {/* Neo-brutalist decorative element */}
      <div className="mt-12 md:mt-16 max-w-md mx-auto">
        <div className="h-1 border-t-[3px] border-black relative">
          <div className="absolute -top-0.5 left-0 w-4 h-4 bg-yellow-400 border-[2px] border-black transform -translate-y-1/2"></div>
          <div className="absolute -top-0.5 right-0 w-4 h-4 bg-red-400 border-[2px] border-black transform -translate-y-1/2"></div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;