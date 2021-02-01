import React from "react";
import s from "./style.module.css";

const Layout = (props) => {
  // console.log(props);

  const style = {};
  if (props.urlBg) {
    style.backgroundImage = `url(${props.urlBg})`;
  }
  if (props.colorBg) {
    style.backgroundColor = props.colorBg;
  }

  return (
    <section className={s.root} id={props.id} style={style}>
      <div className="wrapper">
        <article>
          <div className={s.title}>
            <h3>{props.title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={`${s.desc} ${s.full}`}>{props.children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
