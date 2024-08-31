import { ADD_Item, Delete_Item } from "../ActionTypes/Action";
const Additem = () => {
  return {
    type: ADD_Item,
  };
};
const Deleteitem = () => {
  return {
    type: Delete_Item,
  };
};
export { Additem, Deleteitem };
