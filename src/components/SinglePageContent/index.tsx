import { FC, useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  BtnSubmit,
  CardInfo,
  CardPhotos,
  InputContainer,
  SectionContainer,
  InfoDescription,
  InfoPrice,
  Input,
  Label,
  MainPhoto,
} from "./styles";
import { CartContext, CardsContext } from "../Context";
import { ProductsList } from "../Constants/types";

const SingleCardContent: FC = (): JSX.Element => {
  const { cardId } = useParams();
  const [cardInfo, setCardInfo] = useState<ProductsList | null>(null);
  const [mainImg, setMainImg] = useState("");
  const [count, setCount] = useState<number>(1);

  const { cartList, setCartList } = useContext(CartContext);
  const { cards } = useContext(CardsContext);

  useEffect(() => {
    if (cardId !== undefined) {
      const filteredCard = cards.find((el) => el.id === +cardId);
      if (filteredCard) {
        setCardInfo(filteredCard);
        setMainImg(filteredCard.img);
      }
    }
  }, [cardId, cards]);

  const addToCart = () => {
    if (cardInfo !== null) {
      setCartList([
        ...cartList,
        {
          id: Math.random() * 100,
          title: cardInfo.title,
          img: cardInfo.img,
          count,
          price: cardInfo.price,
        },
      ]);
    }
  };

  return (
    <SectionContainer>
      <CardInfo>
        <InfoPrice>{cardInfo !== null ? cardInfo.price : null}</InfoPrice>
        <InfoDescription>
          Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
          posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
          risus enim, vitae posuere neque laoreet condimentum. Proin vitae
          malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
          porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
          amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
          eleifend mattis convallis.
        </InfoDescription>
        <InputContainer>
          <Label>Quantity</Label>
          <Input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
        </InputContainer>
        <BtnSubmit onClick={() => addToCart()}>Add to Cart</BtnSubmit>
      </CardInfo>
      <CardPhotos>
        <MainPhoto src={mainImg} alt="Main photo" />
      </CardPhotos>
    </SectionContainer>
  );
};

export default SingleCardContent;
