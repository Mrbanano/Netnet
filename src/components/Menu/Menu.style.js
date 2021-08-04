import styled from "styled-components"

export const Header = styled.header`
  width: 100vw;
  position: sticky;
  top: 0;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 3000;
  background: linear-gradient(180deg, #191919 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 101.98%);
`

export const Menu = styled.nav`
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & ul {
    & li {
      list-style: none;
      & a {
        text-decoration: none;
      }
    }
  }
`

export const Logo = styled.div`
  margin-inline-start: 16px;
  margin-block-start: 16px;
  display: inline-block;
  width: 55.84px;
  height: 24px;
  border: 2px solid yellow;
`
export const Options = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid yellow;
`

export const NavButtons = styled.div`
padding-inline-end: 16px;
padding-block-start: 16px;
`


export const ProfileBtn = styled.div`
  display: inline-block;
  background-color: orange;
  border-radius: 10px;
  width: 24px;
  height: 24px;
  border: 2px solid orange;
`


export const Navlink = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
`

export const NavOptions = styled.ul`
  margin: 0;
  padding:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  inline-size: 114px;
`
