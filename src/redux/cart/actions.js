import { ADD_ITEM, DELETE_ITEM, RESET } from "./constants";

const addItem = (payload) => {
  // console.log("add actions", payload);
  return {
    type: ADD_ITEM,
    payload,
  };
};

const deleteItem = (payload) => {
  // console.log("delete", payload);
  return {
    type: DELETE_ITEM,
    payload,
  };
};

const reset = (payload) => {
  return {
    type: RESET,
    payload,
  };
};

export { addItem, deleteItem, reset };
