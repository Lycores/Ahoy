import {atom} from 'recoil'
export var tokenState = atom({
    key: "token",
    default: null
  })
  
export var deviceIdState = atom({
    key: "deviceId",
    default: null
  })
  
export var userProfileState = atom({
    key: "userProfile",
    default: null
  })