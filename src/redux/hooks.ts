import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { useEffect, useState } from "react";
import { clearTimeout } from "timers";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

