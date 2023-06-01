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
} from "./styles";
import { CardsContext } from "../Context";
import { ProductsList } from "../Constants/types";

const CardList: FC = (): JSX.Element => {
  const [cardList, setCardList] = useState<ProductsList[]>([]);
  const { cardId } = useParams<{ cardId: string }>();
  const { cards } = useContext(CardsContext);

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

  return (
    <SectionContainer>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <StyledMasonry>
          {cardList.map(({ id, price, title, img }) => {
            return (
              <Card key={id} to={`../../cards/${id}`}>
                <CardImg src={img} alt={title} />
                <CardTextContainer>
                  <CardTitle>{title}</CardTitle>
                  <CardPrice>{price}</CardPrice>
                </CardTextContainer>
              </Card>
            );
          })}
        </StyledMasonry>
      </ResponsiveMasonry>
    </SectionContainer>
  );
};

export default CardList;
