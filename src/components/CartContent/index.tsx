import { FC, useContext, useState, useEffect } from "react";

import {
  SectionContainer,
  SectionTitle,
  SectionInner,
  ItemInner,
  ItemText,
  ItemTitle,
  ItemsContainer,
  ItemsImg,
  ItemCount,
  EmptyTitle,
  TotalContainter,
  TotalPrice,
  TotalTitle,
} from "./styles";
import { CartContext } from "../Context";

const CartContent: FC = (): JSX.Element => {
  const { cartList } = useContext(CartContext);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    getTotalPrice();
  }, [cartList]);

  const getTotalPrice = () => {
    if (cartList.length < 0) return;
    let counter = 0;
    cartList.forEach((el) => {
      if (+el.price.substring(1).slice(0, -3).replaceAll(",", "") >= 1000) {
        return (counter =
          counter + +el.price.substring(1).slice(0, -3).replaceAll(",", ""));
      } else {
        return (counter = counter + +el.price.substring(1));
      }
    });
    setTotal(counter);
  };

  return (
    <SectionContainer>
      <SectionTitle>Your cart</SectionTitle>
      <SectionInner>
        {cartList.length > 0 ? (
          <>
            <ItemsContainer>
              {cartList.map(({ title, img, price }, i) => {
                return (
                  <ItemInner key={i}>
                    <ItemsImg src={img} alt={title} />
                    <ItemText>
                      <ItemTitle>{title}</ItemTitle>
                      <ItemCount>{price}</ItemCount>
                    </ItemText>
                  </ItemInner>
                );
              })}
            </ItemsContainer>
            <TotalContainter>
              <TotalTitle>Your total is:</TotalTitle>
              <TotalPrice>${total}</TotalPrice>
            </TotalContainter>
          </>
        ) : (
          <EmptyTitle>Your cart is empty.</EmptyTitle>
        )}
      </SectionInner>
    </SectionContainer>
  );
};

export default CartContent;
