import styled from "styled-components";

export const StyledField = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: 20px;
  label {
    display: block;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.navy};
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px outset black;
    border-radius: 10px;
    border-color: ${({ theme }) => theme.colors.gray};
    font-size: 16px;
    outline: none;
  }
`;
