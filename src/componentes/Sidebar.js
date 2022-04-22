import "./estilos-componentes/estilos-sidebar.css"
import logo from "./pics/879864.png"

export function Sidebar() {
    return(
        <aside>
            <img src={logo} alt="cajero" className="logo"/>
            <ul>
                <li>Valgo</li>
                <li>Tres</li>
                <li>tiras</li>
                <li>De Monda</li>
            </ul>
        </aside>
    );
}