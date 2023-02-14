import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  background-color: white;
  padding: 30px 20px;
  border-radius: 10px;
  transform: translateY(-70px);
  h3 {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.navy};
    margin: 0;
  }
  p {
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.gray};
    padding-top: 0px;
    max-width: 250px;
  }
`;
