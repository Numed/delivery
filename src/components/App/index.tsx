import { FC, lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "../Loader";
import { Routes as RoutesPages } from "../../enums";
import { CardsContext, CartContext } from "../Context";
import { productsList } from "../Constants";
import { ProductsList, CartType } from "../Constants/types";

const Main = lazy(() => import("../../pages/MainPage"));
const Cart = lazy(() => import("../../pages/CartPage"));
const ListOfCards = lazy(() => import("../../pages/CartListPage"));

const App: FC = (): JSX.Element => {
  const [cards, setCards] = useState<ProductsList[]>(productsList);
  const [cartList, setCartList] = useState<CartType[]>([]);
  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      <CartContext.Provider value={{ cartList, setCartList }}>
        <Router basename="/delivery">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={RoutesPages.MAIN} element={<Main />} />
              <Route path={RoutesPages.CART} element={<Cart />} />
              <Route path={RoutesPages.LIST} element={<ListOfCards />} />
            </Routes>
          </Suspense>
        </Router>
      </CartContext.Provider>
    </CardsContext.Provider>
  );
};

export default App;
