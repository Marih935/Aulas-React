import React from "react";
import ReactDOM from "react-dom/client";
//react faz isso automaticamente

class Timer extends React.Component {
    
    constructor(props){
        super(props); //obrigatório ter super no constructor (herda)
        this.state = { seconds: this.props.start };
    }

    contar(){ //método do Timer
        this.setState(state => ({seconds: state.seconds + 1})); //atributo => altera estado do componente adicionando novo estado
    }

    componentDidMount(){ //método para "montar"
        this.interval = setInterval(() => this.contar(), this.props.ms); //interval => função pra contar tempo, a cada "ms" vai mudar o estado
    }

    componentWillUnmount(){ //método para "desmontar"
        clearInterval(this.interval); //finalizar para n dar erro (só pararia de contar quando fechar o navegador)
    }

    render(){
        return <h1>Segundos: {this.state.seconds}</h1>; //imprimir o valor do estado do componente
    }

}

export default Timer;