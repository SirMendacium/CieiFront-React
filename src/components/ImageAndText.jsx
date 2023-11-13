import { useState } from "react";

export default function ({ children, src, title, right }) {
  const side = right ? "row-reverse" : "left";
  return (
    <section id="values " className="container">
      <div className={`${side} row`}>
        <div className="col-md-6">
          <h2>{title}</h2>
          <p>{children}</p>

          <span className="hideText">
            <p>
              efectiva y el liderazgo. También creemos que la igualdad y la
              horizontalidad en la relación estudiante-profesor son
              fundamentales para el éxito académico y personal de los
              estudiantes. En nuestro liceo, cada estudiante es valorado y
              respetado por igual, y se les anima a participar activamente en su
              educación para lograr su máximo potencial.
            </p>
          </span>

          <button className="read-more-btn">Leer mas</button>
        </div>
        <div className="col-md-6">
          <img src={src} alt="" />
        </div>
      </div>
    </section>
  );
}
