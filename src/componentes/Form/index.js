import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Button from "../Button";
import "./form.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX",
    "Mobile",
    "Inovação",
  ];

  const aoSalvar = (event) => {
    event.preventDefault();
    alert("Enviado");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card de colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" holder="Digite seu nome" />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          holder="Informe seu cargo"
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          holder="Informe o endereco da imagem"
        />
        <ListaSuspensa label="Times" itens={times}></ListaSuspensa>
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Formulario;
