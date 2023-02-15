import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px 15px;
  background-color: ${({ theme }) => theme.colors.active};
  margin: 30px 0;
  h4 {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0 0 5px;
  }
  div {
    display: flex;
    justify-content: space-between;
    a {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 13px;
      cursor: pointer;
    }
    span {
      color: ${({ theme }) => theme.colors.navy};
      font-size: 13px;
      font-weight: bold;
    }
  }
  hr {
    border: none;
    border-bottom: 0.5px outset black;
    border-color: ${({ theme }) => theme.colors.gray};
    margin: 15px 0;
  }
`;

export const Additional = styled.div`
  flex-direction: column;
  justify-content: space-between;
  div {
    margin-bottom: 10px;
    p {
      margin: 0;
      font-size: 13px;
      &:last-of-type {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.navy};
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray};
    &:last-of-type {
      font-size: 16px;
      color: #4439b1;
      font-weight: bold;
    }
  }
`;
