import styled from "styled-components";
import Masonry from "react-responsive-masonry";
import { Link } from "react-router-dom";

export const SectionContainer = styled.section`
  margin: 40px 0;
  width: 100%;
  height: 100%;
`;

export const StyledMasonry = styled(Masonry)`
  & > div {
    height: 20%;
  }
`;

export const Card = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 0 20px 20px 20px;
  background: #fff;
  text-decoration: none;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  display: block;
`;

export const CardTextContainer = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CardTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #393939;
  margin-bottom: 10px;
`;

export const CardPrice = styled.span`
  font-family: "Karla";
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #6f6f6f;
`;
