import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventTitle: "",
  eventDetails: "",
  events: [],
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

    eventClear: () => initialState,
  },
});

export const { setEventTitle, setEventDetails, eventClear } =
  eventSlice.actions;
export default eventSlice.reducer;
