import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  div {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    gap: 20px;
    align-items: center;
    div {
      display: block;
      text-transform: uppercase;
      span {
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colors.gray};
        font-size: 12px;
      }
      h5 {
        margin: 5px 0 0;

        padding: 0;
        color: white;
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  &.active {
    background-color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
    color: black;
  }
`;

export const MenuItem = ({ id, link, title }) => {
  return (
    <Wrapper>
      <StyledLink to={`/${link}`}>{id}</StyledLink>
      <div>
        <span>step {id}</span>
        <h5>{title}</h5>
      </div>
    </Wrapper>
  );
};
