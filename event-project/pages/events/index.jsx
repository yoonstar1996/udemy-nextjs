import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import React from "react";

export default function AllEventPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
