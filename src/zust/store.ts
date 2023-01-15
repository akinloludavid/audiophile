import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IState } from "../types";
import { createCartSlice } from "./reducers/cartSlice";
import { createProductSlice } from "./reducers/productSlice";

export const useZustStore = create(
  persist(
    (a: any) => ({
      ...createCartSlice(a),
      ...createProductSlice(a),
    }),
    { name: "audiophile" }
  )
);
export const earphonesSelector = (state: IState) => state.allEarphones;
export const headphonesSelector = (state: IState) => state.allHeadphones;
export const speakersSelector = (state: IState) => state.allSpeakers;
export const productSelector = (state: IState) => state.product;
export const setProductIdSelector = (state: IState) => state.setProductId;
export const setCountSelector = (state: IState) => state.setCount;
export const countSelector = (state: IState) => state.count;
