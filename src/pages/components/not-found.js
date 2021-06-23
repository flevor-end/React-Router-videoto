import React, { PureComponent } from "react";
import "./style/generic-page.css";

class NotFound extends PureComponent {
  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${random}`, { id: random });
  };
  handleForwardClick = () => {
    this.props.history.goForward();
  };
  handleBackClick = () => {
    this.props.history.go(-1);
  };

  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>NO HEMOS ENCONTRADO LO QUE ESTABAS BUSCANDO!</h2>
        <button className="Button" onClick={this.handleForwardClick}>
          ir a la Siguiente Ruta👉
        </button>
        <button className="Button" onClick={this.handleBackClick}>
          Ir a la Ruta Anterior 👈
        </button>
        <button className="Button" onClick={this.handleRandomClick}>
          Video random 🔔
        </button>
      </div>
    );
  }
}

export default NotFound;
