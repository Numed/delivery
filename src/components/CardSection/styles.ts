import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionContainer = styled.section`
  margin: 40px 0;
  width: 100%;
  height: 100%;
`;

export const SectionTitle = styled.h3`
  width: 100%;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  padding-bottom: 5px;
  color: #393939;
  text-align: center;
`;

export const SectionInner = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card = styled(Link)`
  max-width: 290px;
  max-height: 290px;
  max-height: 290px;
  padding: 0 20px 20px 20px;
  background: #fff;
  cursor: pointer;
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
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: #393939;
  margin-bottom: 10px;
  letter-spacing: 1.1px;
`;
