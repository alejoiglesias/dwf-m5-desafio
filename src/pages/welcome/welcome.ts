import { goTo } from "../../router";

export function initWelcomePage() {
  const welcomePage = document.createElement("div");
  welcomePage.classList.add("welcome");

  welcomePage.innerHTML = `<div class="welcome__container">
  <h1 class="welcome__title">
    <span>Piedra Papel </span><span class="welcome__title--eton">ó</span>
    <span>Tijera</span>
  </h1>

  <div class="welcome__button">
    <my-button>Empezar</my-button>
  </div>
</div>

<div class="welcome__hands">
  <my-move class="welcome__move" type="scissors"></my-move>
  <my-move class="welcome__move" type="rock"></my-move>
  <my-move class="welcome__move" type="paper"></my-move>
</div>`;

  const button = welcomePage.querySelector(".welcome__button");
  button?.addEventListener("click", () => {
    goTo("/instructions");
  });

  return welcomePage;
}
