import { useState } from "react";
import Banner from "./componentes/Banner";

import Formulario from "./componentes/Form";

function App() {

  const [colaboradores,setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores({...colaboradores, colaborador})
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado={ colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario>
    </div>
  );
}

export default App;
