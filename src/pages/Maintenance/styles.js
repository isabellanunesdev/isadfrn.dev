import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Title = styled.h1`
  font-weight: 400;
`;

export const Subtitle = styled.h2`
  font-weight: 200;
  padding: 1rem 0;
`;
