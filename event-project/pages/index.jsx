import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/dummy-data";
import React from "react";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <header></header>
      <EventList items={featuredEvents} />
    </>
  );
}
