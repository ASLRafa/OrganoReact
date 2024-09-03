import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Button from "../Button";
import "./form.css";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card de colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          holder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          holder="Informe seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          holder="Informe o endereco da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Times"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        ></ListaSuspensa>
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
