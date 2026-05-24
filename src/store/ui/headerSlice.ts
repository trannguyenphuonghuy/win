import { createSlice } from "@reduxjs/toolkit";

type HeaderState = {
  profileOpen: boolean;
  notiOpen: boolean;
  contactOpen: boolean;
};

const initialState: HeaderState = {
  profileOpen: false,
  notiOpen: false,
  contactOpen: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,

  reducers: {
    toggleProfile: (state) => {
      state.profileOpen = !state.profileOpen;

      if (state.profileOpen) {
        state.notiOpen = false;
        state.contactOpen = false;
      }
    },
    toggleContact: (state) => {
      state.contactOpen = !state.contactOpen;

      if (state.contactOpen) {
        state.profileOpen = false;
        state.notiOpen = false;
      }
    },

    toggleNoti: (state) => {
      state.notiOpen = !state.notiOpen;

      if (state.notiOpen) {
        state.profileOpen = false;
        state.contactOpen = false;
      }
    },

    closeAll: (state) => {
      state.profileOpen = false;
      state.notiOpen = false;
      state.contactOpen = false;
    },
  },
});

export const {
  toggleProfile,
  toggleNoti,
  toggleContact,
  closeAll,
} = headerSlice.actions;

export default headerSlice.reducer;
