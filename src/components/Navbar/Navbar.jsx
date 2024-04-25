import { NavLink } from "react-router-dom";
import style from "./Navbar.module.scss"

export const Navbar = (props) => {
  return (
    <nav class={style.navbar}>
        <ul>
            {props.links.map((link, index) => {
            return ( <li key={index}>
            <NavLink to={link.link} > 
                {link.name}
            </NavLink>
            </li>
            );
        })}</ul>
    </nav>
  )
}
