// Import libraries
import { configureStore } from "@reduxjs/toolkit";

// Import reducer
import reducer from "@/reducer";

import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer
});

export type TStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;