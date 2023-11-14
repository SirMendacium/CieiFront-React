import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import studentSVG from "./assets/img/student.svg";
import londonSVG from "./assets/img/london.svg";
import valuesSVG from "./assets/img/values.svg";
import teenagersSVG from "./assets/img/teenagers.svg";
import StudentsOpinion from "./components/StudentsOpinion";
import ImageAndText from "./components/ImageAndText";
import ImageSlider from "./components/ImageSlider";
import student1 from "./assets/img/estudiantes/1.png";
import student2 from "./assets/img/estudiantes/2.avif";
import student3 from "./assets/img/estudiantes/2.png";
import student4 from "./assets/img/estudiantes/3.png";

import liceo1 from "./assets/img/imagenesLiceo/1.jpg";
import liceo2 from "./assets/img/imagenesLiceo/2.jpg";
import liceo3 from "./assets/img/imagenesLiceo/3.jpg";
import liceo4 from "./assets/img/imagenesLiceo/4.jpg";

function App() {
  const images = [liceo1, liceo2, liceo3, liceo4];
  return (
    <div className="main">
      <nav className="navbar navbar-expand-lg sticky-top container">
        <button
          className="navbar-toggler m-4"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">
              Inicio
            </a>
            <a className="nav-item nav-link" href="#values">
              Nuestra institucion
            </a>
            <a className="nav-item nav-link" href="#english">
              Ingles
            </a>
            <a className="nav-item nav-link" href="#jornadas">
              Jornadas
            </a>
            <a className="nav-item nav-link" id="login" href="./login.html">
              Iniciar sesion
            </a>
          </div>
        </div>
      </nav>
      <main className="mt-5 container">
        <div className="d">
          <div className="j">
            <h1>CREANDO LA EDUCACION DEL FUTURO</h1>
            <p>
              Descubre cómo nuestro Liceo brinda una educación de calidad y
              apoya el desarrollo integral de tus hijos
            </p>
          </div>
          <div className="">
            <img className="img-fluid" src={studentSVG} alt="" />
          </div>
        </div>
      </main>
      <ImageAndText src={valuesSVG} title="Nuestros Principios">
        En nuestro liceo, creemos firmemente en la importancia de los principios
        horizontales y la participación estudiantil en la educación. Nos
        esforzamos por crear un ambiente de aprendizaje colaborativo donde cada
        estudiante tenga voz y voto en su educación. Creemos que la
        participación activa de los estudiantes en su proceso de aprendizaje
        fomenta el desarrollo de habilidades como la toma de decisiones, la
        comunicación
      </ImageAndText>

      <ImageSlider images={images} />

      <section className="container" id="opinions">
        <h2>Nuestro estudiantes hablan:</h2>
        <div className="row">
          <StudentsOpinion opinion="asds" src={student1} />
          <StudentsOpinion opinion="asds" src={student2} />
          <StudentsOpinion opinion="asds" src={student3} />
          <StudentsOpinion opinion="asds" src={student4} />
        </div>
      </section>

      <ImageAndText src={londonSVG} title="Ingles de calidad" right>
        Nuestra educación de inglés diferenciada en dos niveles está certificada
        por AUDEPI, una institución líder en la educación de idiomas. Con
        nuestro programa, mejorarás tus habilidades de lectura, escritura,
        comprensión auditiva y expresión oral de manera efectiva y estructurada,
        sin importar tu nivel actual de conocimiento del idioma. Además, puedes
        estar seguro de que estás recibiendo una educación de alta calidad
        respaldada por una certificación reconocida a nivel internacional. Con
        nuestra educación diferenciada, puedes avanzar en tu aprendizaje de
        manera efectiva y a tu propio ritmo.
      </ImageAndText>

      <ImageAndText src={teenagersSVG} title="Nuestros principios">
        En nuestro liceo, nos esforzamos por ofrecer una educación completa que
        no solo se centra en el rendimiento académico, sino también en el
        bienestar y la felicidad de nuestros estudiantes. Es por eso que
        organizamos jornadas educativas y recreativas que permiten a los
        estudiantes aprender de manera divertida y atractiva. Estas jornadas
        incluyen actividades deportivas, excursiones, talleres y eventos
        culturales, que fomentan el trabajo en equipo, la creatividad y la
        exploración de nuevas ideas y conceptos.
      </ImageAndText>

      <footer>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
