import { Link } from "react-router-dom";
import dataProjects from "../data/projects";

export default function Projects() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/resume"}>Curriculum</Link>
      </nav>

      <section>
        <h1>Proyectos</h1>

        {dataProjects.map(({ id, name, image, description, url }) => (
          <div key={id}>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <p>{description}</p>
            <p>{url}</p>
          </div>
        ))}
      </section>
    </>
  );
}
