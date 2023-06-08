import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { eventClear, setEventDetails } from "../features/eventSlice";
import { rrulestr } from "rrule";
import RRuleGenerator from "react-rrule-generator";

const EventForm = ({ calendarRef }) => {
  const dispatch = useDispatch();
  const { eventDetails } = useSelector((state) => state.event);

  const handleSubmit = () => {
    const calendarApi = calendarRef.current.getApi();

    const rruleString = eventDetails;
    console.log(rruleString);
    const rruleData = rrulestr(rruleString);
    const newEvent = {
      rrule: {
        ...rruleData.options,
      },
    };

    calendarApi.addEvent(newEvent);
    dispatch(eventSubmit(newEvent)); // Dispatch the eventSubmit action to update the events array
  };
  const handleClearEvents = () => {
    const calendarApi = calendarRef.current.getApi();

    // Clear existing events
    calendarApi.removeAllEvents();
    dispatch(eventClear()); // Dispatch the clear event action
  };
  return (
    <div>
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
