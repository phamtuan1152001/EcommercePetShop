import { ADD_ITEM, DELETE_ITEM, RESET } from "./constants";

const initialState = {
  listCart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log("add reducer", { state, action });
      return {
        listCart: [...state.listCart, action.payload],
      };
    case DELETE_ITEM:
      console.log("delete item");
    case RESET:
      return initialState;
    default:
      return state;
  }
};
