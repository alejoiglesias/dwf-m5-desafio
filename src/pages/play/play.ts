import { goTo } from "../../router";
import { Game, Move, state } from "../../state";

export function initPlayPage() {
  const playPage = document.createElement("div");
  playPage.classList.add("play");

  playPage.innerHTML = `<div class="play__container">
  <my-countdown></my-countdown>
</div>

<div class="play__hands">
  <my-move class="play__move" type="scissors"></my-move>
  <my-move class="play__move" type="rock"></my-move>
  <my-move class="play__move" type="paper"></my-move>
</div>`;

  initCountdown(playPage);

  return playPage;
}

function initCountdown(container: Element) {
  myMove(container);

  let count = 3;

  const countdown = setInterval(() => {
    count--;

    if (count === 0) {
      clearInterval(countdown);

      const checkMove = document.querySelector(".play__move--select");

      if (checkMove) {
        const myPlay = checkMove.getAttribute("type") as Move;
        const computerPlay = computerMove() as Move;

        state.setMove(myPlay, computerPlay);

        container.innerHTML = `<div class="play__result">
        <my-move
          class="play__position play__computer"
          type="${computerPlay}"
        ></my-move>
        <my-move class="play__position play__player" type="${myPlay}"></my-move>
      </div>`;

        const winner = state.whoWins(myPlay, computerPlay);

        initResult(winner);
      } else {
        goTo("/instructions");
      }
    }
  }, 1000);

  function myMove(container: Element) {
    const moves = ["rock", "paper", "scissors"];

    moves.forEach((move) => {
      const hand = container.querySelector(`[type=${move}]`);

      hand?.addEventListener("click", () => {
        lowerOpacity(container);

        hand.classList.add("play__move--select");
      });
    });
  }

  function lowerOpacity(container: Element) {
    const hands = container.querySelectorAll(".play__move");

    hands.forEach((hand) => {
      hand.classList.remove("play__move--select");
      hand.classList.add("play__move--blurred");
    });
  }

  function computerMove() {
    const number = Math.floor(Math.random() * 3);

    const move = ["rock", "paper", "scissors"][number];

    return move;
  }

  function initResult(result: string) {
    const countdown = setTimeout(() => {
      clearTimeout(countdown);

      const resultPage = document.createElement("div");
      resultPage.classList.add("result");

      if (result === "computer") {
        resultPage.classList.add("result--lose");
      } else {
        resultPage.classList.add("result--win");
      }

      const score = getScore();

      resultPage.innerHTML = `<div class="result__image">
      <my-result result="${result}"></my-result>
    </div>
    
    <div class="result__box">
      <h4 class="result__score">Score</h4>
      <h5 class="result__text">Vos: ${score.player}</h5>
      <h5 class="result__text">Máquina: ${score.computer}</h5>
    </div>
    
    <div class="result__button">
      <my-button>Volver a Jugar</my-button>
    </div>`;

      const button = resultPage.querySelector(".result__button");
      button?.addEventListener("click", () => {
        goTo("/instructions");
      });

      container.appendChild(resultPage);
    }, 1000);
  }

  function getScore() {
    const currentState = state.getState();

    const score = {
      player: 0,
      computer: 0,
    };

    currentState.history.forEach((game: Game) => {
      const result = state.whoWins(game.myPlay, game.computerPlay);

      if (result === "player") {
        score.player++;
      } else if (result === "computer") {
        score.computer++;
      }
    });

    return score;
  }
}
