import React from "react";
import "./style/generic-page.css";
import { Link, NavLink } from "react-router-dom";

const Contacto = () => (
  <div className="Page">
    <h1>Puedes Contactarme en:</h1>
    <p>
      Estoy en el curso de React-Router 2020.04 sigueme en mis Redes Sociales{" "}
      <Link to="https://www.facebook.com/Fabianpedrazab/">Facebook</Link>,{" "}
      <Link to="https://www.instagram.com/flevor923/?hl=es-la">Instagram</Link>{" "}
    </p>
    <p>
      Puedes escribirme al Whatsapp{" "}
      <a href="https://api.whatsapp.com/send?phone=3144002058&text=Hola%20soy%20Fabian%20Pedraza%20Dise%C3%B1ador%20Digital%20y%20multimedia%20,%20vamos%20por%20ese%20proyecto">
        +(57)3144002058
      </a>
    </p>
  </div>
);

export default Contacto;
