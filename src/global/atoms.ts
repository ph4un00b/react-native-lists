import { atom } from "jotai";

export const DEBUG = atom(false);
export const $debug = atom((r) => r(DEBUG));
