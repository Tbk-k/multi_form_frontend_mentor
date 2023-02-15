import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;
  padding: 15px;
  cursor: pointer;
  gap: 15px;

  input {
    appearance: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: -5px;
    position: absolute;
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid black;
    border-color: ${({ theme }) => theme.colors.gray};
    z-index: -1;

    &:checked {
      background-color: ${({ theme }) => theme.colors.active};
      border-color: ${({ theme }) => theme.colors.navy};
    }
  }
  div {
    h4 {
      margin: 0;
      color: ${({ theme }) => theme.colors.navy};
      font-size: 14px;
    }
    p {
      margin: 0;
      font-size: 13px;
    }
    span {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.navy};
    }
  }
`;
