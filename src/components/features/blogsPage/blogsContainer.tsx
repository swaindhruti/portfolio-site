"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import BlogCard, { Blog } from "./blogCard";

// Sample blog data
const blogs: Blog[] = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn the basics of React Hooks and how they can simplify your code.",
    date: "March 25, 2025",
    author: "Jane Smith",
    readTime: "5 min",
    image: "/api/placeholder/800/500",
    slug: "getting-started-with-react-hooks",
  },
  {
    id: "2",
    title: "Building a REST API with Express.js",
    excerpt:
      "A step-by-step guide to creating a RESTful API using Express.js and Node.js.",
    date: "March 20, 2025",
    author: "John Doe",
    readTime: "8 min",
    image: "/api/placeholder/800/500",
    slug: "building-rest-api-express-js",
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt:
      "Understanding the differences between CSS Grid and Flexbox for modern layouts.",
    date: "March 15, 2025",
    author: "Sarah Johnson",
    readTime: "6 min",
    image: "/api/placeholder/800/500",
    slug: "css-grid-vs-flexbox",
  },
  {
    id: "4",
    title: "Introduction to TypeScript",
    excerpt:
      "Why you should consider TypeScript for your next JavaScript project.",
    date: "March 10, 2025",
    author: "Mike Williams",
    readTime: "7 min",
    image: "/api/placeholder/800/500",
    slug: "introduction-to-typescript",
  },
  {
    id: "5",
    title: "Optimizing React Performance",
    excerpt:
      "Advanced techniques to improve the performance of your React applications.",
    date: "March 5, 2025",
    author: "Emily Chen",
    readTime: "10 min",
    image: "/api/placeholder/800/500",
    slug: "optimizing-react-performance",
  },
  {
    id: "6",
    title: "Authentication with NextAuth.js",
    excerpt:
      "Implement authentication in your Next.js applications with NextAuth.js.",
    date: "February 28, 2025",
    author: "Alex Turner",
    readTime: "9 min",
    image: "/api/placeholder/800/500",
    slug: "authentication-with-nextauth-js",
  },
  {
    id: "7",
    title: "Working with PostgreSQL and Node.js",
    excerpt:
      "How to integrate PostgreSQL with your Node.js backend for robust data storage.",
    date: "February 25, 2025",
    author: "David Kim",
    readTime: "8 min",
    image: "/api/placeholder/800/500",
    slug: "postgresql-nodejs-integration",
  },
  {
    id: "8",
    title: "State Management with Redux Toolkit",
    excerpt:
      "Simplify your Redux code with Redux Toolkit's powerful utilities.",
    date: "February 20, 2025",
    author: "Rachel Lee",
    readTime: "7 min",
    image: "/api/placeholder/800/500",
    slug: "state-management-redux-toolkit",
  },
];

const BlogsContainer = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => Math.min(prev + 4, blogs.length));
  };

  // Check if all blogs are visible
  const allBlogsShown = visibleBlogs >= blogs.length;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-8 px-3 sm:px-4 md:px-6 lg:px-8 py-6 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-6 sm:pb-8 md:pb-10 min-h-screen">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-borel text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        My Blog
      </motion.h1>

      <motion.div
        className="text-center max-w-3xl mx-auto text-gray-600 mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p className="text-sm sm:text-base md:text-lg mb-2 px-2">
          Insights, tutorials, and thoughts on web development. Exploring the
          latest trends and best practices in the world of coding.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
        <AnimatePresence>
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      {!allBlogsShown && blogs.length > visibleBlogs && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 sm:mt-8"
        >
          <Button
            onClick={loadMoreBlogs}
            size="lg"
            className="group bg-black backdrop-blur-lg hover:bg-white/30 hover:backdrop-blur-lg hover:text-black border-2 border-black transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-xl text-white font-sans flex items-center gap-2"
          >
            <span className="flex items-center gap-2 font-sans tracking-wide">
              Load More
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:translate-y-1" />
            </span>
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default BlogsContainer;
