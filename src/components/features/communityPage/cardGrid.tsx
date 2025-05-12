import { motion } from "framer-motion";
import { ReactNode, Children } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Variants } from "framer-motion";

interface CardGridProps {
  children: ReactNode;
  variants: Variants;
  inView: boolean;
}

export default function CardGrid({
  children,
  variants,
  inView,
}: CardGridProps) {
  // Convert children to array to work with them
  const childrenArray = Children.toArray(children);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full relative"
    >
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        {/* Previous button - positioned on left side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 sm:-ml-2 md:ml-0">
          <CarouselPrevious className="relative border-[2px] border-black bg-white h-9 w-9 hover:bg-white hover:text-black transition-transform group-hover:translate-x-[-0.5px] group-hover:translate-y-[-0.5px]" />
        </div>

        <CarouselContent className="-ml-2 md:-ml-4">
          {childrenArray.map((child, index) => (
            <CarouselItem
              key={index}
              className="px-4 py-4 basis-full sm:basis-1/2 md:basis-1/3"
            >
              <div className="p-1 sm:p-2">{child}</div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Next button - positioned on right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 sm:-mr-2 md:mr-0">
          <CarouselNext className="relative border-[2px] border-black bg-white h-9 w-9 hover:bg-white hover:text-black transition-transform group-hover:translate-x-[-0.5px] group-hover:translate-y-[-0.5px]" />
        </div>
      </Carousel>
    </motion.div>
  );
}
