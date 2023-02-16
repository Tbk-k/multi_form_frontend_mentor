import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  @media screen and (min-width: 1024px) {
    display: flex;
    width: auto;
    height: auto;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
