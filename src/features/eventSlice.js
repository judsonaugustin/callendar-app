import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventTitle: "",
  eventDetails: "",
  endDate: "",
  events: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEventDetails: (state, action) => {
      state.eventDetails = action.payload;
    },

    eventClear: () => initialState,
  },
});

export const { setEventDetails, eventClear } = eventSlice.actions;
export default eventSlice.reducer;
