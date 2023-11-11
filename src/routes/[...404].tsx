import { Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Alejo N. Terreno</h1>
      <p>
        Visita{" "}
        <a href="https://www.linkedin.com/in/terrenoa/" target="_blank">
          mi LinkedIn
        </a>{" "}
        para conocerme un poco más.
      </p>
    </main>
  );
}
