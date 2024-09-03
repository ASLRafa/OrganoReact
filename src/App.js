import { useState } from "react";
import Banner from "./componentes/Banner";

import Formulario from "./componentes/Form";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff",
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f9e2",
    },
    {
      nome: "Devops",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8",
    },
    {
      nome: "UX",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9",
    },
    {
      nome: "Inovação",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaboradores);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner></Banner>

      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      ></Formulario>

      {times.map((time) => (
        <Time
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          key={time.nome}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        ></Time>
      ))}
    </div>
  );
}

export default App;
