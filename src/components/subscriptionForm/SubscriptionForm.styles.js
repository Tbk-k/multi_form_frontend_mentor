import styled from "styled-components";

export const StyledForm = styled.form`
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  transform: translateY(-80px);
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

export const BtnWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.active};
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  border-radius: 10px;
  margin-top: 15px;
  p {
    font-size: 14px;
    &:first-of-type {
      font-weight: ${({ discount }) => !discount && "bold"};
      color: ${({ theme, discount }) => !discount && theme.colors.navy};
    }
    &:last-of-type {
      font-weight: ${({ discount }) => discount && "bold"};
      color: ${({ theme, discount }) => discount && theme.colors.navy};
    }
  }
  button {
    width: 40px;
    height: 20px;
    border-radius: 50px;
    border: none;
    background-color: ${({ theme }) => theme.colors.navy};
    position: relative;
    cursor: pointer;
    &:after {
      width: 16px;
      height: 16px;
      background-color: ${({ theme }) => theme.colors.active};
      content: "";
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 2px;
      transform: ${({ discount }) =>
        discount ? `translate(20px, -50%)` : `translate(0px, -50%)`};
      transition: transform 0.5s cubic-bezier(0, 1.25, 0.96, 0.96);
    }
  }
`;
