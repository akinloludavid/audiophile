import { IState } from "../../types";
import db from "../../data.json";
const allEarphones = db.filter((el) => el.category === "earphones");
const allSpeakers = db.filter((el) => el.category === "speakers");
const allHeadphones = db.filter((el) => el.category === "headphones");

export const createProductSlice = (set: Function) => ({
  allEarphones,
  allSpeakers,
  allHeadphones,
  count: 0,
  setCount: (inc: number) =>
    set((state: IState) => ({ ...state, count: state.count + 1 })),
  product: null,
  setProductId: (id: string) =>
    set((state: IState) => {
      const product = db.filter((el) => "" + el.id === id || el.slug === id)[0];
      return {
        ...state,
        product,
      };
    }),
});
