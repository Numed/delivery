import { FC } from "react";
import CardList from "../../components/CardList";
import Header from "../../components/Header";

const CartListPage: FC = (): JSX.Element => {
  return (
    <>
      <Header />
      <CardList />
    </>
  );
};

export default CartListPage;
