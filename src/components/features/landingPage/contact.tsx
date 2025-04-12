"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "@/components/shared/contacts/contactForm";
import ContactInfo from "@/components/shared/contacts/contactInfo";
import {
  containerVariants,
  itemVariants,
} from "@/components/shared/contacts/animationVariants";

const ContactSection: React.FC = () => {
  const pageRef = useRef(null);
  const formRef = useRef(null);
  const isPageInView = useInView(pageRef, { once: true, amount: 0.1 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  return (
    <div
      id="contact"
      ref={pageRef}
      className="min-h-screen pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isPageInView ? "visible" : "hidden"}
        className="mb-8 sm:mb-12 md:mb-16"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-borel mb-3 sm:mb-5"
        >
          Let&apos;s Connect
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-center text-gray-600 font-sans max-w-2xl mx-auto"
        >
          Have a question or want to discuss a potential collaboration? I&apos;m
          just a message away.
        </motion.p>
      </motion.div>

      {/* Two-Column Layout for Contact Info and Form */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
        {/* Contact Information - Left Side */}
        <ContactInfo isInView={isPageInView} />

        {/* Contact Form - Right Side */}
        <div ref={formRef} className="lg:col-span-3">
          <ContactForm isInView={isFormInView} />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
