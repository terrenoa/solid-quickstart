import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Alejo N. Terreno</Title>
      <HttpStatusCode code={404} />
      <h1>Alejo N. Terreno</h1>
      <p>
        Visita mi{" "}
        <a href="https://www.linkedin.com/in/terrenoa/" target="_blank">
           LinkedIn
        </a>{" "}
        para conocerme un poco más.
      </p>
    </main>
  );
}
