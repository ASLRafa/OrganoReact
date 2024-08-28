import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

  

  return (
    <div className="lista-suspensa">
      <label htmlFor="">{props.label}</label>
      <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
