import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Home() {
  const [description, setDescription] = useState(
    "Soy desarrollador full stack developer especializado en aplicaciones web modernas.",
  );

  return (
    <section>
      <h1>Porfolio</h1>
      <p>{description}</p>

      <nav>
        <ul>
          <li>
            <Link to="/projects">Ver proyectos</Link>
          </li>
          <li>
            <Link to="/resume">Ver curriculum</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
