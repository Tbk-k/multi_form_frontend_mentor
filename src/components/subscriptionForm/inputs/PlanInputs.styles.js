import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  input {
    appearance: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: -5px;
    position: absolute;
    cursor: pointer;
    border-radius: 5px;
    border: 1px outset black;
    border-color: ${({ theme }) => theme.colors.gray};
    z-index: -1;

    &:checked {
      background-color: ${({ theme }) => theme.colors.active};
      border-color: ${({ theme }) => theme.colors.navy};
    }
  }
  svg {
  }
`;
