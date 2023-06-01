import { ProductsList, CartType } from "../Constants/types";

export type CardsContextType = {
  cards: ProductsList[];
  setCards: (c: ProductsList[]) => void;
};

export type CartContextType = {
  cartList: CartType[];
  setCartList: (c: CartType[]) => void;
};
