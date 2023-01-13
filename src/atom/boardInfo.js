import { atom } from "recoil";

export const boardInfo = atom({
  key: "boardInfo",
  default: new Array(9),
});
