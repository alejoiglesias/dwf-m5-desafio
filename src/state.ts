export type Move = "rock" | "paper" | "scissors";
export type Game = {
  computerPlay: Move;
  myPlay: Move;
};

export const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: [],
  },

  loadState() {
    const state = localStorage.getItem("state");

    if (state) {
      const data = JSON.parse(state);

      return data;
    } else {
      const data = this.data;

      return data;
    }
  },

  saveState(state: any) {
    localStorage.setItem("state", JSON.stringify(state));
  },

  getState() {
    return this.loadState();
  },

  setState(newState: any) {
    this.data = newState;

    this.saveState(newState);
  },

  setMove(myPlay: Move, computerPlay: Move) {
    const currentState = this.getState();

    currentState.currentGame.myPlay = myPlay;
    currentState.currentGame.computerPlay = computerPlay;

    this.pushToHistory(currentState.currentGame);
  },

  pushToHistory(play: Game) {
    const currentState = this.getState();

    currentState.history.push(play);

    this.setState(currentState);
  },

  whoWins(myPlay: Move, computerPlay: Move) {
    function winner(p1: string, p2: string): boolean {
      return (
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "paper" && p2 === "rock")
      );
    }

    if (winner(myPlay, computerPlay)) {
      return "player";
    } else if (winner(computerPlay, myPlay)) {
      return "computer";
    } else {
      return "draw";
    }
  },
};
