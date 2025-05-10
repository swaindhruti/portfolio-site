"use client";

import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  slug: string;
}

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  // Colors for neo-brutalist style - cycle through these for variety
  const colors = [
    "bg-yellow-400",
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];
  
  // Get a color based on the index or blog title's first letter
  const colorIndex = blog.title.charCodeAt(0) % colors.length;
  const accentColor = colors[colorIndex];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="group relative h-full"
    >
      {/* Neo-brutalist background accent */}
      <div
        className={`absolute inset-0 ${accentColor} border-[3px] border-black translate-x-2 translate-y-2`}
      ></div>
      
      {/* Main card */}
      <div className="relative border-[3px] border-black bg-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full transition-transform duration-300 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px]">
        {/* Image section */}
        <div className="relative h-40 sm:h-44 md:h-48 border-b-[3px] border-black overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
          {/* Neo-brutalist corner accent */}
          <div
            className={`absolute top-0 right-0 w-10 h-3 ${accentColor} border-l-[3px] border-b-[3px] border-black`}
          ></div>
        </div>

        {/* Blog info bar with date and metadata */}
        <div className="flex items-center justify-between border-b-[3px] border-black px-3 sm:px-4 py-2 bg-white">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-black">
            <div className="flex items-center gap-1 relative group/read">
              <div className={`absolute inset-0 ${accentColor} border-[1px] border-black translate-x-0.5 translate-y-0.5`}></div>
              <div className="relative border-[1px] border-black bg-white px-1 py-0.5 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                <span className="font-medium">{blog.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1 relative group/author">
              <div className={`absolute inset-0 ${accentColor} border-[1px] border-black translate-x-0.5 translate-y-0.5`}></div>
              <div className="relative border-[1px] border-black bg-white px-1 py-0.5 flex items-center">
                <User className="w-3 h-3 mr-1" />
                <span className="font-medium">{blog.author}</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs font-bold">{blog.date}</p>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-grow">
          <h3 className="font-heading text-base sm:text-lg md:text-xl font-bold text-black mb-2 sm:mb-3 line-clamp-2">
            {blog.title}
          </h3>
          
          <p className="text-xs sm:text-sm md:text-base text-black mb-4 line-clamp-3">
            {blog.excerpt}
          </p>
          
          {/* Neo-brutalist link button */}
          <div className="mt-auto relative group/btn self-start">
            <div className={`absolute inset-0 ${accentColor} border-[2px] border-black translate-x-1 translate-y-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:translate-y-0.5`}></div>
            <Link href={`/blog/${blog.slug}`} className="relative inline-flex items-center border-[2px] border-black bg-white px-3 py-1 font-bold text-sm sm:text-base transition-transform group-hover/btn:translate-x-[-0.5px] group-hover/btn:translate-y-[-0.5px]">
              READ ARTICLE
              <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        {/* Bottom corner accent */}
        <div
          className={`absolute bottom-0 left-0 w-10 h-3 ${accentColor} border-r-[3px] border-t-[3px] border-black`}
        ></div>
      </div>
    </motion.div>
  );
};

export default BlogCard;