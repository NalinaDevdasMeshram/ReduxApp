import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { Additem, Deleteitem } from "../Action/ActionCart";
const Cart = () => {
  const state = useSelector((state) => state);
  //   console.log("state", state);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Cart App</h1>
      <h2>Number of item in Cart:{state.numberOfItem}</h2>
      <button className="btn1" onClick={() => dispatch(Additem())}>
        ADD Item To Cart{" "}
      </button>
      <button
        className="btn2"
        disabled={state.numberOfItem > 0 ? false : true}
        onClick={() => dispatch(Deleteitem())}
      >
        Remove Item To Cart
      </button>
    </div>
  );
};
export default Cart;
