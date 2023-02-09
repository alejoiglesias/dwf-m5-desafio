import { goTo } from "../../router";

export function initInstructionsPage() {
  const instructionsPage = document.createElement("div");
  instructionsPage.classList.add("instructions");

  instructionsPage.innerHTML = `<div class="instructions__container">
  <h2 class="instructions__info">
    Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3
    segundos.
  </h2>

  <div class="instructions__button">
    <my-button>¡Jugar!</my-button>
  </div>
</div>

<div class="instructions__hands">
  <my-move class="instructions__move" type="scissors"></my-move>
  <my-move class="instructions__move" type="rock"></my-move>
  <my-move class="instructions__move" type="paper"></my-move>
</div>`;

  const button = instructionsPage.querySelector(".instructions__button");
  button?.addEventListener("click", () => {
    goTo("/play");
  });

  return instructionsPage;
}
