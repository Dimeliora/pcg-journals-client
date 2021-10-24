import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../interfaces/store.types";

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
