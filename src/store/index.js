import { create } from "zustand";
export const userCart = create((set) => ({
  value: [],
  addToCart: (newOpj) => set((state) => ({value:[...state.value , newOpj]})),
}));
