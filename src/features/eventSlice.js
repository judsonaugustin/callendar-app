import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventTitle: "",
  eventDetails: "",
  events: [],
  error: {},
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventTitle: (state, action) => {
      state.eventTitle = action.payload;
    },
    setEventDetails: (state, action) => {
      state.eventDetails = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    eventClear: () => initialState,
  },
});

export const { setEventTitle, setEventDetails, eventClear, setError } =
  eventSlice.actions;
export default eventSlice.reducer;
