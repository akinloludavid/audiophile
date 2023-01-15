import { IState } from "../../types";

export const createCartSlice = (set: Function) => ({
  cart: [],
  addToCart: (payload: any) =>
    set((state: IState) => {
      const idx = state.cart.findIndex((el) => el.id === payload.id);
      if (idx === -1) {
        const updatedCart = [...state.cart, payload];
        return { ...state, cart: updatedCart };
      } else {
        const updatedCart = state.cart.map((product, index) =>
          idx === index
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
        return { ...state, cart: updatedCart };
      }
    }),
  removeFromCart: (payload: any) =>
    set((state: IState) => {
      const updatedCart = state.cart.filter((el) => el.id !== payload.id);
      return { ...state, cart: updatedCart };
    }),
});
