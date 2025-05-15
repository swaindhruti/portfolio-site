"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Users, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Custom Components
import CommunityCard from "../features/communityPage/communityCard";
import EventCard from "../features/communityPage/eventsCard";
import SectionHeader from "../features/communityPage/sectionHeader";
import StatCard from "../features/communityPage/statsCard";
import CardGrid from "../features/communityPage/cardGrid";

// Data
import {
  communitiesList,
  eventsList,
  statsData,
} from "@/config/community/Data";

// Animation
import {
  containerVariants,
  itemVariants,
} from "../features/communityPage/animation";

const CommunityPage = () => {
  // Section refs for intersection observer
  const communityRef = useRef(null);
  const eventsRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  // Intersection observers
  const isCommunityInView = useInView(communityRef, {
    once: true,
    amount: 0.1,
  });
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.1 });

  return (
    <main className="pt-28 md:pt-36">
      {/* Neo-brutalist Page Header */}
      <div className="text-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-green-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
          <h1 className="relative border-[3px] border-black bg-white font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-6 py-3 text-black rounded-md">
            COMMUNITY ENGAGEMENT
          </h1>
        </div>
      </div>

      {/* SECTION 1: Communities I'm Part Of */}
      <section
        ref={communityRef}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto justify-center flex flex-col items-center"
      >
        <SectionHeader
          icon={Users}
          title="Communities I'm Part Of"
          variants={containerVariants}
          itemVariants={itemVariants}
          inView={isCommunityInView}
        />

        <CardGrid variants={containerVariants} inView={isCommunityInView}>
          {communitiesList.map((item, index) => (
            <CommunityCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
              variants={itemVariants}
            />
          ))}
        </CardGrid>
      </section>

      {/* Neo-brutalist Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="h-1 border-t-[3px] border-black"></div>
      </div>

      {/* SECTION 2: Events I've Been Part Of */}
      <section
        ref={eventsRef}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto justify-center flex flex-col items-center"
      >
        <SectionHeader
          icon={Calendar}
          title="Events I've Been Part Of"
          variants={containerVariants}
          itemVariants={itemVariants}
          inView={isEventsInView}
        />

        <CardGrid variants={containerVariants} inView={isEventsInView}>
          {eventsList.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
              variants={itemVariants}
            />
          ))}
        </CardGrid>
      </section>

      {/* Neo-brutalist Community Stats */}
      <section
        ref={statsRef}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              variants={itemVariants}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Neo-brutalist Call to Action */}
      <section
        ref={ctaRef}
        className="py-12 md:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center"
      >
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-6 sm:mb-10 inline-block">
            <div className="absolute inset-0 bg-purple-400 border-[3px] border-black translate-x-2 translate-y-2 rounded-md"></div>
            <h3 className="relative border-[3px] border-black bg-white font-heading text-xl sm:text-2xl md:text-3xl font-bold px-6 py-3 text-black rounded-md">
              WANT TO COLLABORATE?
            </h3>
          </div>

          <div className="relative mb-8 sm:mb-10">
            <div className="absolute top-0 right-0 w-16 h-4 bg-green-400 border-[3px]  border-black rounded-bl-md rounded-tr-md"></div>
            <div className="absolute bottom-0 left-0 w-16 h-4 bg-pink-400 border-[3px] border-black rounded-tr-md rounded-bl-md"></div>
            <p className="text-black font-sans text-sm sm:text-base md:text-lg border-[3px] border-black bg-white p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-md">
              Whether you&apos;re organizing a tech event, looking for a
              speaker, or want to collaborate on a community project, I&apos;d
              love to hear from you.
            </p>
          </div>

          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-blue-400 border-[3px] border-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-2 group-hover:translate-y-1 rounded-md"></div>
            <Button
              className="relative border-[3px] border-black bg-white text-black hover:bg-white hover:text-black font-heading text-base sm:text-lg font-bold px-8 py-3 h-auto flex items-center transition-transform group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] rounded-md"
              asChild
            >
              <a href="/contact">
                GET IN TOUCH
                <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityPage;
