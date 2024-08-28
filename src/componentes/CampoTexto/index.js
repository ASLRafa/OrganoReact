
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitar = (event) =>{
    props.aoAlterado(event.target.value)
  }

  return (
    
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.holder} />
    </div>
  );
};

export default CampoTexto;
