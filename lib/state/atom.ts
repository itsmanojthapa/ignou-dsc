import { atom } from "recoil";

export const openAtom = atom({
  key: "counterAtom", // Unique key
  default: false, // Initial value
});
