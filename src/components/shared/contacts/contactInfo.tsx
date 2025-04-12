import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from "lucide-react";
import { containerVariants, itemVariants } from "./animationVariants";

interface ContactInfoProps {
  isInView: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ isInView }) => {
  // Social media links
  const socialLinks = [
    {
      icon: <Github size={20} className="sm:w-5 sm:h-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub",
      username: "@yourusername",
    },
    {
      icon: <Twitter size={20} className="sm:w-5 sm:h-5" />,
      href: "https://twitter.com/yourusername",
      label: "Twitter",
      username: "@yourusername",
    },
    {
      icon: <Linkedin size={20} className="sm:w-5 sm:h-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      username: "Dhrutinandan Swain",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="lg:col-span-2"
    >
      <div className="bg-white/10 border-2 border-black/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl h-full">
        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-medium font-sans mb-6 sm:mb-8"
        >
          Contact Information
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">
          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="bg-black text-white p-2 sm:p-3 rounded-lg">
              <Mail size={20} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-medium text-gray-500 mb-1">
                Email
              </h3>
              <a
                href="mailto:dhrutinandan@email.com"
                className="text-base sm:text-lg hover:underline transition-colors"
              >
                dhrutinandan@email.com
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="bg-black text-white p-2 sm:p-3 rounded-lg">
              <MapPin size={20} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-medium text-gray-500 mb-1">
                Location
              </h3>
              <p className="text-base sm:text-lg">Bhubaneswar, Odisha, India</p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            className="flex items-start space-x-4"
          >
            <div className="bg-black text-white p-2 sm:p-3 rounded-lg">
              <Phone size={20} className="sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-medium text-gray-500 mb-1">
                Phone
              </h3>
              <a
                href="tel:+91XXXXXXXXXX"
                className="text-base sm:text-lg hover:underline transition-colors"
              >
                +91 XXXXXXXXXX
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm sm:text-base font-medium text-gray-500 mb-3">
              Find me on
            </h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group"
                >
                  <div className="bg-black/10 group-hover:bg-black text-black group-hover:text-white p-2 sm:p-3 rounded-lg transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {link.label}
                    </p>
                    <p className="text-base group-hover:underline transition-colors">
                      {link.username}
                    </p>
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
