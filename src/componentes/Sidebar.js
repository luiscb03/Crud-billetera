import "./estilos-componentes/estilos-sidebar.css"
import { BiHomeAlt, BiListUl, BiPlusCircle, BiEditAlt, BiTrashAlt} from "react-icons/bi";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import logo from "./pics/879864.png"
import { PantallaInicio } from "./PantallInicio";

export function Sidebar() {
    return(
        <aside>
            <Router>
                <div className="conetenorLogo"><img src={logo} alt="cajero" className="logo"/></div>
                <ul>
                    <NavLink to="/"><li><a className="icons" href="google.com"><BiHomeAlt/>Inicio</a></li></NavLink>
                    <NavLink to="agregar"><li><a className="icons" href="google.com"><BiPlusCircle/>Agregar</a></li></NavLink>
                    <NavLink to="listar"><li><a className="icons" href="google.com"><BiListUl/>Listar</a></li></NavLink>
                    <NavLink to="modificar"><li><a className="icons" href="google.com"><BiEditAlt/>Modificar</a></li></NavLink>
                    <NavLink to="eliminar"><li><a className="icons" href="google.com"><BiTrashAlt/>Eliminar</a></li></NavLink>
                </ul>

                <Routes>
                    <Route path="/" element={ <PantallaInicio/> } />
                </Routes>
            </Router>
        </aside>
    );
}