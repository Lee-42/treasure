/* eslint-disable */
import { localhostGet } from "./localhost";

export const LocalHost = {
  getAudio(params) {
    return localhostGet("audio", params);
  },
};
