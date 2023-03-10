import React from "react"; /* importa biblioteca React */
import ReactDOM from "react-dom/client";
import Timer from "./components/Exemplo01"; //importa componente
import "./index.css";

// class OlaMundo extends React.Component{ /* componente (usado na metodologia de classe)*/
//     render(){
//         return <h1>Olá {this.props.nome}</h1> /* repassa propriedades para filho (comunicação direta = cima para baixo)*/
//     }
// }

function OlaMundo(props){ /* componente funcional */
    return <h1>Olá {props.nome}</h1>
}

class Pagina01 extends React.Component{ /* componente metodologia de classe*/
    render(){
        return (
            <> {/* fragmento para imprimir mais de uma vez (return só retorna uma vez) */}
                <OlaMundo nome={this.props.nome[0]}/>
                <OlaMundo nome={this.props.nome[1]}/>
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root")); /* renderiza o componente */
//root.render(<Pagina01 nome={["Mariana", "Mari"]}/>);
//root.render(<Timer />); //chama componente Timer do exemplo 01
root.render(
    <>
        <Timer start={0} ms={1000}></Timer>
    </>
);