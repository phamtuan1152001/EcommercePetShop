import API from "../../configs/api";
import apiMethod from "../../../../utils/ApiMethod";

export const loginAuthenticate = (payload) => {
  return apiMethod.post(API.SIGN_IN, payload);
};
