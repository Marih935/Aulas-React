import React from "react";
import {ReactDOM} from "react-dom/client";
//react faz isso automaticamente

class Timer extends React.Component {
    
    constructor(props){
        super(props); //obrigatório ter super no constructor (herda)
        this.state = { seconds: this.props.start };
    }

    contar(){ //método do Timer
        this.setState(state => ({ seconds: state.seconds + 1 })); //atributo => altera estado do componente adicionando novo estado
    }

    startStop(){
        if(this.interval){
            clearInterval(this.interval);
            this.interval = null;
        } else{
            this.interval = setInterval(() => this.contar(), 1000);
        }
    }
    
zero(){
    this.setState(state => ({ seconds: 0 }));
}

    // componentDidMount(){ //método para "montar"
    //     this.interval = setInterval(() => this.contar(), this.props.ms); //interval => função pra contar tempo, a cada "ms" vai mudar o estado
    // }

    // componentWillUnmount(){ //método para "desmontar"
    //     clearInterval(this.interval); //finalizar para n dar erro (só pararia de contar quando fechar o navegador)
    // }

    render(){
        return(
            <>
                <div className="bg-black w-48 md:w-96 h-16 m-4 rounded-xl flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-azull01 cronometro">
                        {this.state.seconds}
                    </h1>
                </div>

                <div className="flex flex-row justify-center w-48 md:w-96 m-4">
                    <button onClick={this.startStop()} className="bg-azull01 text-white rounded-lg scroll-py-24 w-36 m-4 px-4 py-3">
                    Iniciar/Parar
                    </button>

                    <button onClick={this.zero()} className="bg-red-600 text-white rounded-lg scroll-py-24 w-36 m-4 px-4 py-3">
                        Zerar
                    </button>
                </div>
            </>
        );
    }
}

export default Timer;