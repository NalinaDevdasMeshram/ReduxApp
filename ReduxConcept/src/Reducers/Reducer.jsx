import { ADD_Item, Delete_Item } from "../ActionTypes/Action";

const InitailState = {
  numberOfItem: 0,
};
const Reducer = (state = InitailState, Action) => {
  switch (Action.type) {
    case ADD_Item:
      return {
        ...state,
        numberOfItem: state.numberOfItem + 1,
      };
    case Delete_Item:
      return {
        ...state,
        numberOfItem: state.numberOfItem - 1,
      };
    default:
      return state;
  }
};
export default Reducer;
