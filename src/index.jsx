import React from 'react'; /* importa biblioteca React */
import ReactDOM from 'react-dom/client';
import Timer from './components/Exemplo01'; // importa componente
import './index.css';

// class OlaMundo extends React.Component{ /* componente (usado na metodologia de classe)*/
//     render(){
//         return <h1>Olá {this.props.nome}</h1> /* repassa propriedades (comunicação direta)*/
//     }
// }

function OlaMundo(props) { /* componente funcional */
  const {nome} = props; /* desestruturação */
  return (
    <h1>
      Olá
      {nome}
    </h1>
  );
}

function Pagina01 () { /* componente metodologia de classe */
  const { nome } = props;
  return (
    <div>
      <OlaMundo nome={nome[0]} />
      <OlaMundo nome={nome[1]} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')); /* renderiza o componente */
// root.render(<Pagina01 nome={["Mariana", "Mari"]}/>);
// root.render(<Timer />); //chama componente Timer do exemplo 01
root.render(
  <Timer start={0} ms={1000} />,
  <Pagina01 />,
);
