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
      className="min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
    >
      {/* Neo-brutalist Page Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <div className="relative inline-block mb-4 sm:mb-6">
          <div className="absolute inset-0 bg-pink-400 border-[2px] sm:border-[3px] border-black translate-x-1.5 sm:translate-x-2 translate-y-1.5 sm:translate-y-2 rounded-md"></div>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate={isPageInView ? "visible" : "hidden"}
            className="relative border-[2px] sm:border-[3px] border-black bg-white font-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold px-4 sm:px-6 py-2 sm:py-3 text-black rounded-md"
          >
            GET IN TOUCH
          </motion.h1>
        </div>
      </div>

      {/* Two-Column Layout for Contact Info and Form - No outer boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
        {/* Contact Information - Left Side */}
        <div className="lg:col-span-2">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isPageInView ? "visible" : "hidden"}
          >
            <ContactInfo isInView={isPageInView} />
          </motion.div>
        </div>

        {/* Contact Form - Right Side */}
        <div ref={formRef} className="lg:col-span-3">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
          >
            <ContactForm isInView={isFormInView} />
          </motion.div>
        </div>
      </div>

      {/* Neo-brutalist decorative element */}
      <div className="mt-8 sm:mt-10 md:mt-12 max-w-md mx-auto">
        <div className="h-1 border-t-[2px] sm:border-t-[3px] border-black relative">
          <div className="absolute -top-0.5 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 border-[1px] sm:border-[2px] border-black transform -translate-y-1/2"></div>
          <div className="absolute -top-0.5 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-red-400 border-[1px] sm:border-[2px] border-black transform -translate-y-1/2"></div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
