import { FC } from "react";
import CartContent from "../../components/CartContent";
import Header from "../../components/Header";

const CartPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <CartContent />
    </>
  );
};

export default CartPage;
