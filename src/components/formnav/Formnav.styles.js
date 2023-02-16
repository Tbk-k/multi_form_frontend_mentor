import styled from "styled-components";

export const Wrapper = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: ${({ step }) => (step == 1 ? "flex-end" : "space-between")};
  background-color: white;
  width: 100%;
  padding: 20px 15px;
  button {
    font-weight: bold;
    cursor: pointer;
    &.back {
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray};
    }
    &.next {
      border: none;
      background-color: ${({ theme }) => theme.colors.navy};
      background-color: ${({ step }) => step == 5 && "#4840fc"};
      border-radius: 10px;
      color: white;
      padding: 15px 20px;
    }
  }
  @media screen and (min-width: 1024px) {
    position: relative;
  }
`;
