import { create } from "zustand";

export let domain = "http://localhost:1337";

export const userCart = create((set) => ({
  value: [],
  addToCart: (newOpj) => set((state) => ({value:[...state.value , newOpj]})),
}));

export const selectCats = create((set) => ({
  value:null,
  selectedCategory: (category) => set(() => ({value:category})),
}));
