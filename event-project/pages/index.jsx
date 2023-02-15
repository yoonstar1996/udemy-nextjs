import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";
import React from "react";
import Head from "next/head";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great evets that allow you to evolve..."
        />
      </Head>
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
