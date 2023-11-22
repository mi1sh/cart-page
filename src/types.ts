export type CartItemType = {
  id: number;
  catefory: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

export type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}
