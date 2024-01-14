import { createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "./thunks/sendMessage";

const initialContactState = {
  sent: false,
  success: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialContactState,
  extraReducers: (builder) => {
    builder.addCase(sendMessage.fulfilled, (state) => {
      state.sent = true;
      state.success = true;
    });
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
