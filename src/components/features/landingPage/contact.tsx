"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "@/components/shared/contacts/contactForm";
import ContactInfo from "@/components/shared/contacts/contactInfo";
import { itemVariants } from "@/components/shared/contacts/animationVariants";

const ContactSection: React.FC = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const isPageInView = useInView(pageRef, { once: true, amount: 0.1 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  return (
    <div
      id="contact"
      ref={pageRef}
      className="min-h-screen pt-16 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
    >
      {/* Neo-brutalist Page Header */}
      <div className="text-center mb-12 md:mb-16">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-emerald-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate={isPageInView ? "visible" : "hidden"}
            className="relative border-[3px] border-black bg-white font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-6 py-3 text-black rounded-md"
          >
            LET&apos;S CONNECT
          </motion.h1>
        </div>
      </div>

      {/* Two-Column Layout for Contact Info and Form - No outer boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
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
      <div className="mt-12 md:mt-16 max-w-md mx-auto">
        <div className="h-1 border-t-[3px] border-black relative">
          <div className="absolute -top-0.5 left-0 w-4 h-4 bg-yellow-400 border-[2px] border-black transform -translate-y-1/2"></div>
          <div className="absolute -top-0.5 right-0 w-4 h-4 bg-red-400 border-[2px] border-black transform -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
