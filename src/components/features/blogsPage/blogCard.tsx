"use client";

import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

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
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.1 }}
      className="h-full"
    >
      <Card className="bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/40 transition-all duration-300 ease-in-out flex flex-col h-full overflow-hidden border-2 border-black/10 hover:border-black">
        <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover border-b-black/10 hover:border-black transition-all duration-300 ease-in-out"
          />
        </div>

        <CardHeader className="pt-4 sm:pt-5 md:pt-6 pb-0 px-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{blog.author}</span>
            </div>
          </div>
          <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans line-clamp-2">
            {blog.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 pt-2 sm:pt-3 md:pt-4 pb-2 px-4">
          <CardDescription className="text-xs sm:text-sm md:text-base font-sans line-clamp-3">
            {blog.excerpt}
          </CardDescription>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
            {blog.date}
          </p>
        </CardContent>

        <CardFooter className="p-3 sm:p-4 md:p-6 mt-auto">
          <Link href={`/blog/${blog.slug}`} className="w-full">
            <Button className="w-full h-auto text-sm sm:text-base md:text-lg group relative overflow-hidden bg-black border-2 border-black text-white backdrop-blur-lg hover:bg-white/10 hover:text-black transition-all duration-300 ease-in-out py-1.5 sm:py-2 md:py-3 px-2 sm:px-3 rounded-xl">
              <span className="flex items-center justify-center gap-1 sm:gap-2 font-sans">
                Read Article
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
