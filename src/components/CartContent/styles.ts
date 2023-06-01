import styled from "styled-components";

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
  margin-botoom: 15px;
`;

export const EmptyTitle = styled.h3`
  width: 100%;
  text-align: center;
  padding: 20px 0 0;
  border-top: 1px solid #dadada;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 27px;
  font-family: "Karla";
  color: #6d6d6d;
`;

export const SectionInner = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ItemsContainer = styled.div`
  width: 100%;
  padding: 40px 0;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  width: 100%:
  height: 100%;
`;

export const ItemInner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #dadada;
  padding: 40px 0;
  height: 100%;
  min-width: 120px;

  &:last-child {
    border-bottom: none;
  }
`;

export const ItemsImg = styled.img`
  max-width: 25%;
  max-height: 100%;
  object-fit: cover;
`;

export const ItemText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const ItemTitle = styled.h5`
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #393939;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ItemCount = styled.h6`
  font-weight: 400;
  letter-spacing: 0.05em;
  color: #6f6f6f;
  text-transform: uppercase;
  font-size: 14px;
`;

export const TotalContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const TotalTitle = styled.h3`
  margin-right: 5px;
  font-size: 14px;
  font-family: "Karla";
  color: #6f6f6f;
`;

export const TotalPrice = styled.h4`
  font-size: 18px;
  color: #4d4d4d;
  font-weight: 500;
`;
