"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlogCard from "./blogCard";
import { blogs } from "@/config/blogs/Data";

// Sample blog data

const BlogsContainer = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => Math.min(prev + 4, blogs.length));
  };

  // Check if all blogs are visible
  const allBlogsShown = visibleBlogs >= blogs.length;

  return (
    <div className="flex flex-col items-center justify-center space-y-10 md:space-y-16 px-3 sm:px-4 md:px-6 lg:px-8 py-6 pb-10  min-h-screen">
      {/* Neo-brutalist header */}
      <div className="relative inline-block mb-6">
        <div className="absolute inset-0 bg-yellow-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
        <motion.h1
          className="relative border-[3px] border-black bg-white font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-6 py-3 text-black rounded-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          MY BLOG
        </motion.h1>
      </div>

      {/* Blog grid - without outer container box */}
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 gap-4 px-2 sm:gap-y-6 sm:gap-6 md:gap-10 w-full">
          <AnimatePresence>
            {blogs.slice(0, visibleBlogs).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                className="h-full"
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Neo-brutalist Load More Button */}
      {!allBlogsShown && blogs.length > visibleBlogs && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-10 sm:mt-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-red-400 border-[3px] border-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-200 rounded-md"></div>
            <Button
              onClick={loadMoreBlogs}
              className="relative border-[3px] border-black bg-white text-black hover:bg-white hover:text-black font-heading text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all duration-200 rounded-md"
            >
              <span className="flex items-center gap-2 font-bold">
                LOAD MORE
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-y-1" />
              </span>
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BlogsContainer;
