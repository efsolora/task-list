import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Link to="/">
        {"  "}
        <button> Menu</button>
      </Link>

      <Link to="/Tareas">
        {"  "}
        <button> Tareas</button>
      </Link>

      <Link to="/Sobre-Nosotros">
        {"  "}
        <button> Sobre Nosotros</button>
      </Link>
    </div>
  );
}
