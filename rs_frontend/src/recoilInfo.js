import { atom } from "recoil";
export var tokenRecoil = atom({
  key: "token",
  default: null,
});

export var deviceIdRecoil = atom({
  key: "deviceId",
  default: null,
});

export var userProfileRecoil = atom({
  key: "userProfile",
  default: null,
});

export var recentlyPlayedRecoil = atom({
  key: "lastTimePlayed",
  default: null,
});
