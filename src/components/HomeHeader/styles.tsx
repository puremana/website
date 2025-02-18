import { Link } from "gatsby"
import Particles from "react-particles-js"
import styled, { css } from "styled-components"
import TPHLogo from "../../images/tph-logo.svg"

export const HomeHeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  min-height: auto;
  background: #1f2a34;

  &.is-home {
    min-height: 100vh;
    overflow: hidden;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  max-width: 100%;

  .is-home & {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 50px;
  text-transform: uppercase;
  line-height: 1;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  .is-home & {
    margin: 32px 0;
    font-size: 88px;
    max-width: 100%;

    @media screen and (max-width: 991px) {
      font-size: 58px;
    }

    @media screen and (max-width: 767px) {
      font-size: 32px;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 42px;
  }

  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`

export const FadedBottomWave = styled.div`
  position: absolute;
  transform: translateY(100%);
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  pointer-events: none;

  svg {
    position: static;
  }

  .is-home & {
    opacity: 1;
    transition: opacity 0.5s, transform 0.5s;
    transform: translateY(0);
  }

  .is-home & svg {
    position: static;
  }
`

export const StyledParticles = styled(Particles)`
  mask-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 1) 25%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 0) 95%
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const InnerWrapper = styled.div`
  width: 800px;
  max-width: calc(100% - 64px);
  padding: 32px;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const Logo = styled(TPHLogo)`
  width: 70px;
  margin: 0 15px 0 0;
  position: relative;
  z-index: 3;

  .is-home & {
    width: 98px;
    margin-bottom: 0 0 10px 0;
  }
`

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const MenuItemText = styled.div`
  position: relative;
  z-index: 5;
`

/* underline bar, getting animated through hover */
export const MenuItemLine = styled.div`
  position: absolute;
  z-index: 4;
  height: 2px;
  width: 100%;
  margin-top: -3px;
  bottom: 0;
  background: #fff;
  transition: all 0.3s;
  left: 0;
`

export const menuItemStyles = css`
  display: flex;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  color: #fff;
  position: relative;
  transition: color 0.3s;
  margin: 10px 20px 5px 0;
  font-family: "Oxygen Mono";

  &:hover {
    color: #fff;
  }

  &:hover ${MenuItemLine} {
    padding: 8px;
    height: 100%;
    background: #dd66a1;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1), 0 5px 11px rgba(0, 0, 0, 0.25);
    margin-left: -8px;
    margin-bottom: -8px;
    border-radius: 3px;
  }

  &.disabled {
    cursor: default;
    pointer-events: none;
    opacity: 0.7;
    color: #fff !important;
  }

  &.disabled ${MenuItemLine} {
    bottom: 50%;
    background: #fff !important;
  }

  &.active {
    font-weight: 700;
    color: #dd66a1;

    ${MenuItemLine} {
      background: #dd66a1;
    }

    &:hover {
      color: #fff;
    }

    &:hover ${MenuItemLine} {
      background: #dd66a1;
    }
  }
`

export const MenuItem = styled(Link)`
  ${menuItemStyles};
`

export const MenuItemExternal = styled.a`
  ${menuItemStyles};
`
