import CartItem from "../CartItem/CartItem";
// Стили
import { Wrapper } from "./Cart.styles";
// Типы
import { CartItemType } from "../types";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  return (
    <Wrapper>
      <h2>
        Your Shopping Cart
      </h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem />
      ))}
    </Wrapper>
  )
}

export default Cart;