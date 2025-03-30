"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

// Sample blog data
const blogs = [
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

// Individual Blog Card Component
interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  slug: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.2 }}
      className="h-full"
    >
      <Card className="bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/40 transition-all duration-300 ease-in-out flex flex-col h-full overflow-hidden border-2 border-black/10 hover:border-black">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover border-b-black/10 hover:border-black transition-all duration-300 ease-in-out"
          />
        </div>

        <CardHeader className="pt-6 pb-0">
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{blog.author}</span>
            </div>
          </div>
          <CardTitle className="text-xl lg:text-2xl font-sans line-clamp-2">
            {blog.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 pt-4 pb-2">
          <CardDescription className="text-base md:text-base font-sans line-clamp-3">
            {blog.excerpt}
          </CardDescription>
          <p className="text-sm text-gray-500 mt-3">{blog.date}</p>
        </CardContent>

        <CardFooter className="p-6 mt-auto">
          <Link href={`/blog/${blog.slug}`} className="w-full">
            <Button className="w-full h-auto text-lg group relative overflow-hidden bg-black border-2 border-black text-white backdrop-blur-lg hover:bg-white/10 hover:text-black transition-all duration-300 ease-in-out py-2 sm:py-3 px-2 sm:px-3 rounded-xl">
              <span className="flex items-center justify-center gap-1 sm:gap-2 font-sans">
                Read Article
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

// Main Blogs Container Component
const BlogsContainer = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);

  const loadMoreBlogs = () => {
    setVisibleBlogs((prev) => Math.min(prev + 4, blogs.length));
  };

  // Check if all blogs are visible
  const allBlogsShown = visibleBlogs >= blogs.length;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-10 px-3 sm:px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-12 mt-32">
      <motion.h1
        className="text-4xl lg:text-6xl font-borel text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Blog
      </motion.h1>

      <motion.div
        className="text-center max-w-3xl mx-auto text-gray-600 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p className="text-lg mb-2">
          Insights, tutorials, and thoughts on web development. Exploring the
          latest trends and best practices in the world of coding.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 w-full">
        <AnimatePresence>
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
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
          className="mt-8"
        >
          <Button
            onClick={loadMoreBlogs}
            size="lg"
            className="group bg-black backdrop-blur-lg hover:bg-white/30 hover:backdrop-blur-lg hover:text-black border-2 border-black transition-all duration-300 text-lg px-8 py-6 rounded-xl text-white font-sans flex items-center gap-2"
          >
            <span className="flex items-center gap-2 font-sans tracking-wide">
              Load More
              <ChevronDown className="w-7 h-7 transition-transform duration-300 group-hover:translate-y-1" />
            </span>
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default BlogsContainer;
