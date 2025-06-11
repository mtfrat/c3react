import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>Esperando a Violeta</h1>
      </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/2"> Perros Grandes </NavLink>
                </li>
                <li>
                  <NavLink to="/categoria/3"> Perros Chicos </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar