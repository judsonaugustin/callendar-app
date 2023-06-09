import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  eventClear,
  setEventDetails,
  setEventTitle,
} from "../features/eventSlice";
import { rrulestr } from "rrule";
import RRuleGenerator from "react-rrule-generator";

const EventForm = (props) => {
  const dispatch = useDispatch();
  const { eventTitle, eventDetails } = useSelector((state) => state.event);

  const handleSubmit = () => {
    const calendarApi = props.calendarRef.current.getApi();

    const rruleString = eventDetails;
    console.log(rruleString);
    const rruleData = rrulestr(rruleString);
    const newEvent = {
      title: eventTitle,
      rrule: {
        ...rruleData.options,
      },
    };

    calendarApi.addEvent(newEvent);
    // dispatch(addEvent(newEvent)); // Dispatch the eventSubmit action to update the events array
  };
  const handleClearEvents = () => {
    const calendarApi = props.calendarRef.current.getApi();

    // Clear existing events
    calendarApi.removeAllEvents();
    dispatch(eventClear()); // Dispatch the clear event action
  };
  return (
    <div>
      <div className="flex">
        {/* <label htmlFor="eventTitle">Event Name</label> */}
        <input
          type="text"
          value={eventTitle}
          className="ml-12 py-2 pl-4 pr-10 rounded-lg ml-64 mt-4"
          placeholder="Event Name"
          onChange={(e) => dispatch(setEventTitle(e.target.value))}
        />
      </div>
      <RRuleGenerator
        onChange={(rrule) => dispatch(setEventDetails(rrule))}
        config={{
          repeat: ["Daily", "Yearly", "Monthly", "Weekly", "Hourly"],
          yearly: "on the",
          monthly: "on",
          end: ["On date", "Never"],
          weekStartsOnSunday: true,
          hideError: true,
          hideStart: false,
        }}
      />
      <div className="flex gap-4 justify-center mt-4">
        {" "}
        <button
          className="bg-black px-5 py-2 rounded-lg shadow-lg text-[#B0F3F1]"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="bg-white px-5 py-2 rounded-lg shadow-lg text-black"
          type="button"
          onClick={handleClearEvents}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default EventForm;
