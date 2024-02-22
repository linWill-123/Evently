import { getEventById } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";
import React from "react";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);
  console.log(event);
  return <div>page</div>;
};

export default EventDetails;
