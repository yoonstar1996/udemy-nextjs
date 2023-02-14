import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
import React from "react";

export default function Home(props) {
  return (
    <>
      <EventList items={props.events} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
