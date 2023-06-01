import { FC } from "react";

import {
  Card,
  CardImg,
  CardTextContainer,
  CardTitle,
  SectionContainer,
  SectionTitle,
  SectionInner,
} from "./styles";
import { shopsInfo } from "../Constants";

const CardSection: FC = (): JSX.Element => {
  return (
    <SectionContainer>
      <SectionTitle>Choose a shop</SectionTitle>
      <SectionInner>
        {shopsInfo.map(({ id, img, title }) => {
          return (
            <Card key={id} to={`/cardList/${id}`}>
              <CardImg src={img} alt={title} />
              <CardTextContainer>
                <CardTitle>{title}</CardTitle>
              </CardTextContainer>
            </Card>
          );
        })}
      </SectionInner>
    </SectionContainer>
  );
};

export default CardSection;
