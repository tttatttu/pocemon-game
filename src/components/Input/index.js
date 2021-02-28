import s from "./style.module.css";

const Input = ({ value, type = "text", name, onChange }) => {
  return (
    <div className={s.root}>
      <input className={s.input} value={value} type={type} name={name} onChange={onChange} />
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label className={s.label}>{name}</label>
    </div>
  );
};

export default Input;
