import shop1 from "../../img/bigl.png";
import shop2 from "../../img/rozetka.png";
import shop3 from "../../img/bird.png";

import card1 from "../../img/Cards/card1.png";
import card2 from "../../img/Cards/card2.png";
import card3 from "../../img/Cards/card3.png";
import card4 from "../../img/Cards/card4.png";
import card5 from "../../img/Cards/card5.png";
import card6 from "../../img/Cards/card6.png";
import card7 from "../../img/Cards/card7.png";
import card8 from "../../img/Cards/card8.png";
import card9 from "../../img/Cards/card9.png";

import { ShopInfo, ProductsList } from "./types";

export const shopsInfo: ShopInfo[] = [
  { id: 0, title: "Bigl", img: shop1 },
  { id: 1, title: "Rozetka", img: shop2 },
  { id: 2, title: "BirdKey", img: shop3 },
];

export const productsList: ProductsList[] = [
  { id: 1, img: card5, title: "Classic Tan Round", price: "$230.00" },
  { id: 2, img: card6, title: "Classic Black", price: "$170.00" },
  { id: 3, img: card8, title: "Oak Ladder", price: "$750.00" },
  { id: 4, img: card3, title: "Box Leg Table", price: "$3,080.00" },
  { id: 5, img: card4, title: "Kiss Cuddle Coffee Table", price: "$1,045.00" },
  { id: 6, img: card1, title: "Atelier Stool", price: "$355.00" },
  { id: 7, img: card9, title: "Lapse Mirror", price: "$1,250.00" },
  { id: 8, img: card7, title: "Box Drawers", price: "$1,630.00" },
  { id: 9, img: card2, title: "Beam Bed", price: "$2,300.00" },
];
