import { NavLink } from "react-router-dom";

function Menu(){
    return(
        <nav className="bg-branco h-8 px-4">
            <ul className="h-8 flex flex-row gap-4">
                <li>
                    <NavLink to="/Login">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/HomePage">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Exemplo01">
                        Exemplo01
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;