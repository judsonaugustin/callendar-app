import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventForm from "./EventForm";

import rrulePlugin from "@fullcalendar/rrule";
import EventList from "./EventList";

const CalendarApp = () => {
  const calendarRef = useRef(null);
  const { events } = useSelector((state) => state.event);

  useEffect(() => {
    // Obtain the FullCalendar API from the calendarRef
    const calendarApi = calendarRef.current.getApi();
    // Remove all existing events from the calendar
    calendarApi.removeAllEvents();
    // Add the updated events from the Redux store to the calendar
    calendarApi.addEventSource(events);
  }, [events]); // Run this effect whenever the 'events' array changes

  return (
    <div className="relative bg-gradient-to-r from-[#B0F3F1] to-[#FFCFDF]">
      <div className="flex-row h-full mx-4">
        <div className="w-full px-3 py-4">
          <h3 className="text-3xl font-semibold text-center mt-4">
            Add Events
          </h3>
          <div className="mt-2">
            <EventForm calendarRef={calendarRef} />
          </div>
          {/* <div>
            <EventList events={events} />
          </div> */}
        </div>
        <div className="w-full flex">
          <div className=" bg-white mt-auto mb-4 w-full py-4 px-4 border-t-8 border-yellow-200 rounded-3xl">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                rrulePlugin,
              ]}
              initialView="dayGridMonth"
              headerToolbar={{
                start: "today prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              editable={true}
              selectable={true}
              height={"500px"}
              ref={calendarRef}
              className="bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarApp;
