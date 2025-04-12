"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Users, Calendar } from "lucide-react";
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

  // Intersection observers
  const isCommunityInView = useInView(communityRef, {
    once: true,
    amount: 0.1,
  });
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.1 });

  return (
    <main className="pt-20 md:pt-24 lg:pt-28">
      {/* Page Header */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-borel mb-4 sm:mb-6">
          Community Engagement
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 font-sans">
          I believe in the power of tech communities to drive innovation and
          growth. Here&apos;s how I&apos;m contributing to the developer
          ecosystem.
        </p>
      </div>

      {/* SECTION 1: Communities I'm Part Of */}
      <section
        ref={communityRef}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
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

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <hr className="border-t border-gray-200" />
      </div>

      {/* SECTION 2: Events I've Been Part Of */}
      <section
        ref={eventsRef}
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
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
              date={event.date}
              location={event.location}
              image={event.image}
              link={event.link}
              variants={itemVariants}
            />
          ))}
        </CardGrid>
      </section>

      {/* Community Stats */}
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
            />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 sm:mb-6">
          Want to collaborate?
        </h3>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Whether you&apos;re organizing a tech event, looking for a speaker, or
          want to collaborate on a community project, I&apos;d love to hear from
          you.
        </p>
        <Button
          className="bg-black text-white hover:bg-transparent hover:text-black border-2 border-black px-6 py-2.5 sm:py-3 text-base sm:text-lg rounded-xl transition-all duration-300"
          asChild
        >
          <a href="/contact">Get In Touch</a>
        </Button>
      </section>
    </main>
  );
};

export default CommunityPage;
