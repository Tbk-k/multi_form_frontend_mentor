import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  return <StyledLink to={`/${link}`}>{id}</StyledLink>;
};
