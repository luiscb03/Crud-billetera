import "./estilos-componentes/estilos-header.css"

export function Header() {
    return (
        <header>
            <form className="formulario">
                <input type="text" value="buscar" className="text-form" />
                <input type="submit" placeholder="Buscar" className="btn-form" />
            </form>
            <div>
                <button className="botonCrear">Crear</button>
                <button className="btnSecundario"></button>
                <button className="btnSecundario"></button>
            </div>
        </header>
    );
}
