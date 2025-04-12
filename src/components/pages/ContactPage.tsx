"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactInfo from "@/components/shared/contacts/contactInfo";
import ContactForm from "@/components/shared/contacts/contactForm";
import {
  containerVariants,
  itemVariants,
} from "@/components/shared/contacts/animationVariants";

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
      {/* Page Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isPageInView ? "visible" : "hidden"}
        className="mb-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-borel mb-3"
        >
          Get In Touch
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-center text-gray-600 font-sans max-w-2xl mx-auto"
        >
          I&apos;m always open to new opportunities, collaborations, and
          conversations. Feel free to reach out through any of these channels.
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
    </main>
  );
};

export default ContactPage;
