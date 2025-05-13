import { motion } from "framer-motion";
import { Mail, Phone, Github, Twitter, Linkedin } from "lucide-react";
import { containerVariants, itemVariants } from "./animationVariants";

interface ContactInfoProps {
  isInView: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ isInView }) => {
  // Social media links
  const socialLinks = [
    {
      icon: <Github size={22} />,
      href: "https://github.com/yourusername",
      label: "GitHub",
      username: "@yourusername",
      bgColor: "bg-yellow-400",
    },
    {
      icon: <Twitter size={22} />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      username: "@yourusername",
      bgColor: "bg-blue-400",
    },
    {
      icon: <Linkedin size={22} />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      username: "Dhrutinandan Swain",
      bgColor: "bg-red-400",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="lg:col-span-2"
    >
      <div className="bg-white border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-6 sm:p-8 md:p-10 relative rounded-md">
        {/* Neo-brutalist accent */}
        <div className="absolute top-0 right-0 w-28 h-3 bg-yellow-400 border-l-[3px] border-b-[3px] border-black rounded-bl-md"></div>
        <div className="absolute bottom-0 left-0 w-20 h-3 bg-blue-400 border-r-[3px] border-t-[3px] border-black rounded-tr-md"></div>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-10 relative inline-block"
        >
          Contact Information
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black"></div>
        </motion.h2>

        <div>
          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="flex items-start space-x-5 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-400 border-[2px] border-black translate-x-1 translate-y-1 rounded-md"></div>
              <div className="bg-white border-[2px] border-black p-3 relative rounded-md">
                <Mail size={24} className="text-black" />
              </div>
            </div>
            <div className="py-1.5">
              <h3 className="text-sm sm:text-base font-bold font-heading text-black mb-2">
                EMAIL
              </h3>
              <a
                href="mailto:dhrutinandan@email.com"
                className="text-base sm:text-lg font-medium relative inline-block group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-transform"
              >
                dhrutinandan@email.com
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            className="flex items-start space-x-5 group mt-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 border-[2px] border-black translate-x-1 translate-y-1 rounded-md"></div>
              <div className="bg-white border-[2px] border-black p-3 relative rounded-md">
                <Phone size={24} className="text-black" />
              </div>
            </div>
            <div className="py-1.5">
              <h3 className="text-sm sm:text-base font-bold font-heading text-black mb-2">
                PHONE
              </h3>
              <a
                href="tel:+91XXXXXXXXXX"
                className="text-base sm:text-lg font-medium relative inline-block group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-transform"
              >
                +91 XXXXXXXXXX
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></div>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-4 pt-4 border-t-[2px] border-black"
          >
            <h3 className="text-sm sm:text-base font-bold font-heading text-black mb-4">
              FIND ME ON
            </h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 group"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 ${link.bgColor} border-[2px] border-black translate-x-1 translate-y-1 transition-transform duration-150 rounded-md `}
                    ></div>
                    <div className="bg-white border-[2px] border-black p-3 relative transition-transform duration-150 rounded-md g">
                      {link.icon}
                    </div>
                  </div>
                  <div className="py-1">
                    <p className="text-sm font-bold font-heading text-black mb-1">
                      {link.label.toUpperCase()}
                    </p>
                    <span className="text-base font-medium relative inline-block">
                      {link.username}
                      <span
                        key={`underline-${index}`}
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform"
                      ></span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
