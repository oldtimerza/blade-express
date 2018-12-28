import { CartContext } from "../../contexts/cart-context";

const CartManager = props => (
  <CartContext.Provider>{props.children}</CartContext.Provider>
);

export default CartManager;
