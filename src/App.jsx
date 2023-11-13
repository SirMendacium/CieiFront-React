import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import studentSVG from "./assets/img/student.svg";
import londonSVG from "./assets/img/london.svg";
import valuesSVG from "./assets/img/values.svg";
import teenagersSVG from "./assets/img/teenagers.svg";
import StudentsOpinion from "./components/StudentsOpinion";
import ImageAndText from "./components/ImageAndText";
function App() {
  const [count, setCount] = useState(0);

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

      <section id="wrapper">
        <article className="slider-wrapper theme-default">
          <div id="slider" className="nivoSlider">
            <img
              src="img/imagenesLiceo/1.jpg"
              data-thumb="demo/images/toystory.jpg"
              alt=""
            />
            <img
              src="img/imagenesLiceo/2.jpg"
              data-thumb="demo/images/up.jpg"
              alt=""
            />
            <img
              src="img/imagenesLiceo/3.jpg"
              data-thumb="demo/images/walle.jpg"
              alt=""
              data-transition="slideInLeft"
            />
            <img
              src="img/imagenesLiceo/4.jpg"
              data-thumb="demo/images/nemo.jpg"
              alt=""
            />
          </div>
        </article>
      </section>

      <section className="container" id="opinions">
        <h2>Nuestro estudiantes hablan:</h2>
        <div className="row">
          <StudentsOpinion opinion="asds" />
          <StudentsOpinion opinion="asds" />
          <StudentsOpinion opinion="asds" />
          <StudentsOpinion opinion="asds" />
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
