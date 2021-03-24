import s from "./style.module.css";
import cn from 'classnames'

const Input = ({ label, isValid, value, type = "text", name, onChange }) => {
    console.log(isValid);
  return (
    <div className={s.root}>
      <input className={cn(s.input, {[s.valid]: isValid})} label={label} value={value} type={type} name={name} onChange={onChange} />
      <span className={s.highlight}></span>
      <span className={s.bar}></span>
      <label className={s.label}>{name}</label>
    </div>
  );
};

export default Input;
