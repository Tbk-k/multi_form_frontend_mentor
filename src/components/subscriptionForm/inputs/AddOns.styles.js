import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
  border-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 20px;
  border-radius: 10px;
  border-color: ${({ isChecked, theme }) => isChecked && theme.colors.navy};
  background-color: ${({ isChecked, theme }) =>
    isChecked && theme.colors.active};
  div {
    display: flex;
    gap: 20px;
    input {
      width: 18px;
      border-color: ${({ theme }) => theme.colors.gray};
    }
    div {
      flex-direction: column;
      gap: 0;
      h4 {
        margin: 0;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.navy};
      }
      p {
        margin: 0;
        font-size: 14px;
      }
    }
  }
  span {
    color: #433bfb;
    font-size: 14px;
  }
  &[active="true"] {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
