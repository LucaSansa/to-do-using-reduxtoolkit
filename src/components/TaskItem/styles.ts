import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 60px;
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;
  background-color: #17181f;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 12px;
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 60%;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  width: 70%;
  word-break: break-all;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: white;
  margin: 0;
  padding: 0;
`;
