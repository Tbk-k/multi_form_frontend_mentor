import styled from "styled-components";
import SideBgMobile from "../../assets/img/bg-sidebar-mobile.svg";
import SideBgDesktop from "../../assets/img/bg-sidebar-desktop.svg";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background: center/cover no-repeat url(${SideBgMobile});
  @media screen and (min-width: 1024px) {
    background: center/contain no-repeat url(${SideBgDesktop});
    height: fit-content;
    min-height: 560px;
    width: 290px;
    display: flex;
    align-items: flex-start;
    padding-left: 50px;
}
`;

export const DotsMenu = styled.menu`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding-top: 40px;
  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`;
