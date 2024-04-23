import { NavLink } from "react-router-dom";


export const Navbar = (props) => {
  return (
    <nav>
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
