import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SetupState = {
  name: string;
  phone: string;
  grade: string;
  loading: boolean;

  nameError: string;
  phoneError: string;
};

const initialState: SetupState = {
  name: "",
  phone: "",
  grade: "10",

  loading: false,

  nameError: "",
  phoneError: "",
};

const setupSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload;
    },
    setGrade(state, action: PayloadAction<string>) {
      state.grade = action.payload;
    },

    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setNameError(state, action: PayloadAction<string>) {
      state.nameError = action.payload;
    },
    setPhoneError(state, action: PayloadAction<string>) {
      state.phoneError = action.payload;
    },

    resetSetup() {
      return initialState;
    },
  },
});

export const {
  setName,
  setPhone,
  setGrade,
  setLoading,
  setNameError,
  setPhoneError,
  resetSetup,
} = setupSlice.actions;

export default setupSlice.reducer;