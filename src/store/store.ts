import { configureStore } from "@reduxjs/toolkit";

import setupAuth from "@/store/auth/setupAuth";
import headerReducer from "@/store/ui/headerSlice";
import sidebarReducer from "@/store/ui/sidebarSlice";

export const store = configureStore({
    reducer: {
        setupAuth: setupAuth,
        header: headerReducer,
        sidebar: sidebarReducer,
        // user: userReducer,
        // sidebar: sidebarSlice,
        // dashboard: MainDSlice,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;