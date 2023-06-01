import { createContext } from "react";
import { CardsContextType, CartContextType } from "./types";

export const CardsContext = createContext<CardsContextType>({
  cards: [],
  setCards: () => {},
});

export const CartContext = createContext<CartContextType>({
  cartList: [],
  setCartList: () => {},
});
