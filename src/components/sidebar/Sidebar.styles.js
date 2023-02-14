import styled from "styled-components";
import SideBgMobile from "../../assets/img/bg-sidebar-mobile.svg";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: center/cover no-repeat url(${SideBgMobile});
`;

export const DotsMenu = styled.menu`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 40px;
`;
