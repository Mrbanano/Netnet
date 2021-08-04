import { Link } from "gatsby"
import React from "react"
import { Header, Menu, Logo,Options,ProfileBtn,Navlink,NavOptions,NavButtons } from "./Menu.style"

const navItems = [
  {
    caption: "Series",
    href: "/Serie",
    type: "link",
  },
  {
    caption: "Peliculas",
    href: "/Movie",
    type: "link",
  },
  {
    caption: "Mi Lista",
    href: "/List",
    type: "link",
  },
]
const NavButtonItems = [
  {
    name: "search",
    img: "",
    href: "/Search",
  },
  {
    name: "notification",
    img: "",
    href: "/Notification",
  },
  {
    name: "Profile",
    img: "",
    href: "/Profile",
  },
]

const Navbar = () => {
  return (
    <Header>
      <Menu>
        <Link to={"/"}>
          <Logo></Logo>
        </Link>
        <div>
          <Navlink>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.caption}</Link>
              </li>
            ))}
          </Navlink>
        </div>
        <NavButtons>
          <NavOptions>
            {NavButtonItems.map((item, index) => (
              <li key={"btnNav" + index}>
                <Link to={item.href}>
                {
                item.href ==="/Profile" ? <ProfileBtn/> :
                <Options></Options>
                }
                </Link>
              </li>
            ))}
          </NavOptions>
        </NavButtons>
      </Menu>
    </Header>
  )
}

export default Navbar
