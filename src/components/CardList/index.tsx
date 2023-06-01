import { FC, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ResponsiveMasonry } from "react-responsive-masonry";

import {
  SectionContainer,
  Card,
  CardImg,
  CardPrice,
  CardTextContainer,
  CardTitle,
  StyledMasonry,
  BtnAdd,
} from "./styles";
import { CardsContext, CartContext } from "../Context";
import { ProductsList } from "../Constants/types";

const CardList: FC = (): JSX.Element => {
  const [cardList, setCardList] = useState<ProductsList[]>([]);
  const { cardId } = useParams<{ cardId: string }>();
  const { cards } = useContext(CardsContext);
  const { cartList, setCartList } = useContext(CartContext);

  useEffect(() => {
    if (cardId !== undefined) {
      const numericCardId = +cardId;
      const slicedCardList = cards.slice(
        numericCardId * 3,
        numericCardId * 3 + 3
      );
      setCardList(slicedCardList);
    }
  }, [cardId, cards]);

  const onAdd = (id: number) => {
    const getCardInfo = cardList.filter((el) => el.id === id)[0];
    setCartList([...cartList, getCardInfo]);
  };

  return (
    <SectionContainer>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <StyledMasonry>
          {cardList.map(({ id, price, title, img }) => {
            return (
              <Card key={id}>
                <CardImg src={img} alt={title} />
                <CardTextContainer>
                  <CardTitle>{title}</CardTitle>
                  <CardPrice>{price}</CardPrice>
                </CardTextContainer>
                <BtnAdd onClick={() => onAdd(id)}>Add to cart</BtnAdd>
              </Card>
            );
          })}
        </StyledMasonry>
      </ResponsiveMasonry>
    </SectionContainer>
  );
};

export default CardList;
