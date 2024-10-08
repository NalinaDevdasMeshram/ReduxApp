import { Provider } from "react-redux";
import store from "./Store";
import Cart from "./Component/Cart";

function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

export default App;
