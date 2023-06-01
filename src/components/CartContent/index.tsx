import React, { FC, useContext, useState, useEffect } from "react";

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
  CartActions,
  ButtonsContainer,
  ActionButton,
  MaskCount,
  ItemMask,
} from "./styles";
import { CartContext } from "../Context";
import { useHover } from "../../helpers";

const CartContent: FC = (): JSX.Element => {
  const [total, setTotal] = useState<number>(0);
  const { cartList, setCartList } = useContext(CartContext);

  const [isHovered, eventHandlers, hoveredCard] = useHover();

  useEffect(() => {
    getTotalPrice();
  }, [cartList]);

  const getTotalPrice = () => {
    if (cartList.length < 0) return;
    let counter = 0;
    cartList.forEach((el) => {
      if (+el.price.substring(1).slice(0, -3).replaceAll(",", "") >= 1000) {
        return (counter =
          counter +
          +el.price.substring(1).slice(0, -3).replaceAll(",", "") * el.count);
      } else {
        return (counter = counter + +el.price.substring(1) * el.count);
      }
    });
    setTotal(counter);
  };

  const onAddItem = (target: any) => {
    console.log(target);
    console.log(target instanceof Object);
    const filterCart = cartList.filter((el) => {
      return (
        el.title ===
        target.parentElement.parentElement.parentElement.lastElementChild.alt
      );
    })[0];
    const updateOrder = {
      ...filterCart,
      count: filterCart.count + 1,
    };
    setCartList([
      ...cartList.map((el) => {
        return el === filterCart ? (el = updateOrder) : el;
      }),
    ]);
  };

  const onRemoveItem = (target: any) => {
    const filterCart = cartList.filter((el) => {
      if (target !== null) {
        return (
          el.title ===
          target?.parentElement?.parentElement?.parentElement?.lastElementChild
            ?.alt
        );
      }
    })[0];

    const updateOrder = {
      ...filterCart,
      count: filterCart.count - 1,
    };

    if (updateOrder.count === 0) {
      return setCartList([...cartList.filter((el) => el !== filterCart)]);
    }
    setCartList([
      ...cartList.map((el) => {
        return el === filterCart ? (el = updateOrder) : el;
      }),
    ]);
  };

  return (
    <SectionContainer>
      <SectionTitle>Your cart</SectionTitle>
      <SectionInner>
        {cartList.length > 0 ? (
          <>
            <ItemsContainer>
              {cartList.map(({ title, img, count, price }, i) => {
                return (
                  <ItemInner key={i}>
                    <ItemMask {...eventHandlers}>
                      {isHovered && hoveredCard.current?.alt === title ? (
                        <CartActions>
                          <MaskCount>{count}</MaskCount>
                          <ButtonsContainer>
                            <ActionButton
                              className="action-btn"
                              onClick={(e) => onAddItem(e.target)}
                            >
                              +
                            </ActionButton>
                            <ActionButton
                              className="action-btn"
                              onClick={(e) => onRemoveItem(e.target)}
                            >
                              -
                            </ActionButton>
                          </ButtonsContainer>
                        </CartActions>
                      ) : null}
                      <ItemsImg src={img} alt={title} />
                    </ItemMask>
                    <ItemText>
                      <ItemTitle>{title}</ItemTitle>
                      <ItemCount>
                        {count} x {price}
                      </ItemCount>
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
