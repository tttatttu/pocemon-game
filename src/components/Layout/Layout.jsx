import React from "react";
import s from "./Layout.module.css";

const Layout = (props) => {
  return (
    <section className={s.root} id={props.id}>
      <div
        className="wrapper"
        style={
          props.colorBg
            ? { backgroundColor: props.colorBg }
            : {
                backgroundImage: props.urlBg,
              }
        }
      >
        <article>
          <div className={s.title}>
            <h3>{props.title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={s.desc + ' ' + s.full}>
            <p>{props.desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
