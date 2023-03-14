import React, { useEffect, useState } from 'react';

function Exemplo01() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  function incrementar(){
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Contagem: {count}</h1>
      <button onClick={incrementar} className="bg-azull01 text-branco rounded-lg w-24">
        Adicionar
      </button>
    </div>
    );
}

export default Exemplo01;
