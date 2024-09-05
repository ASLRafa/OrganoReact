import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          "--corSecundaria": props.corSecundaria,
        }}
      >
        <h3 style={{ "--corPrimaria": props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              cor={props.corPrimaria}
              key={colaborador.nome}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
