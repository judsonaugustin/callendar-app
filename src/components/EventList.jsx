import React from "react";
import { useSelector } from "react-redux";

const EventList = () => {
  const { events } = useSelector((state) => state.event);

  return (
    <div className="mx-4 mt-8">
      <h3 className="text-3xl font-semibold text-center mt-4 mb-4">Events</h3>
      <div className="h-64 overflow-y-auto bg-white rounded-lg p-4">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index}>
              <p className="font-bold text-xl mt-1">{event.title}</p>
              <div className="flex gap-4">
                <p>{event.start}</p>
                <p>{event.end}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No events yet</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
