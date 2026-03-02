import { Link } from "react-router-dom";
import { studies, experiences } from "../data/resume";

export default function Resume() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Proyectos</Link>
      </nav>

      <h1>Curriculum</h1>
      <section className="curriculum">
        <article>
          <h2>Estudios</h2>
          {studies.map(({ id, title, institution, date }) => (
            <div key={id}>
              <h3>{title}</h3>
              <p>{institution}</p>
              <span>{date}</span>
            </div>
          ))}
        </article>
        <article>
          <h2>Experiencia</h2>
          {experiences.map(({ id, title, company, date }) => (
            <div key={id}>
              <h3>{title}</h3>
              <p>{company}</p>
              <span>{date}</span>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
