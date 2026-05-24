import { createSlice } from "@reduxjs/toolkit";

type SidebarState = {
  expanded: boolean;
  mobileOpen: boolean;
};

const initialState: SidebarState = {
  expanded: false,
  mobileOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleExpanded(state) {
      state.expanded = !state.expanded;
    },
    setExpanded(state, action: { payload: boolean }) {
      state.expanded = action.payload;
    },

    openMobile(state) {
      state.mobileOpen = true;
    },
    closeMobile(state) {
      state.mobileOpen = false;
    },
    toggleMobile(state) {
      state.mobileOpen = !state.mobileOpen;
    },
  },
});

export const {
  toggleExpanded,
  setExpanded,
  openMobile,
  closeMobile,
  toggleMobile,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;