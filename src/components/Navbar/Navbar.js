import { Link } from "gatsby"
import React from "react"


const navItems = [
  {
    caption: "Inicio",
    href: "/",
  },
  {
    caption: "Buscar",
    href: "/Search",
  },
  {
    caption: "Proximamente",
    href: "/Serie",
  },
  {
    caption: "Descargas",
    href: "/Download",
  },
  {
    caption: "Perfil",
    href: "/Profile",
  },
  
]

const Navbar = () => {
  return (
    <section className="">
      <nav className="">
        <ul className="">
          {navItems.map((item, index) => (
            <li key={"Navbar"+index}>
              <Link className="" to={item.href}>
                {item.caption}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
