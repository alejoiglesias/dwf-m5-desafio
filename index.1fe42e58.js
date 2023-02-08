function e(e, t, n, s) {
  Object.defineProperty(e, t, {
    get: n,
    set: s,
    enumerable: !0,
    configurable: !0,
  });
}
var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  n = {},
  s = {},
  o = t.parcelRequireca0a;
null == o &&
  (((o = function (e) {
    if (e in n) return n[e].exports;
    if (e in s) {
      var t = s[e];
      delete s[e];
      var o = { id: e, exports: {} };
      return (n[e] = o), t.call(o.exports, o, o.exports), o.exports;
    }
    var r = new Error("Cannot find module '" + e + "'");
    throw ((r.code = "MODULE_NOT_FOUND"), r);
  }).register = function (e, t) {
    s[e] = t;
  }),
  (t.parcelRequireca0a = o)),
  o.register("27Lyk", function (t, n) {
    var s, o;
    e(
      t.exports,
      "register",
      () => s,
      (e) => (s = e)
    ),
      e(
        t.exports,
        "resolve",
        () => o,
        (e) => (o = e)
      );
    var r = {};
    (s = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) r[t[n]] = e[t[n]];
    }),
      (o = function (e) {
        var t = r[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t;
      });
  }),
  o.register("cOtVG", function (e, t) {
    e.exports = new URL(
      o("27Lyk").resolve("3TYs3"),
      import.meta.url
    ).toString();
  }),
  o.register("j4Buu", function (e, t) {
    e.exports = new URL(
      o("27Lyk").resolve("aJsSp"),
      import.meta.url
    ).toString();
  }),
  o.register("jgOdn", function (e, t) {
    e.exports = new URL(
      o("27Lyk").resolve("5z2gr"),
      import.meta.url
    ).toString();
  }),
  o.register("5SRrt", function (e, t) {
    e.exports = new URL(
      o("27Lyk").resolve("4HIA2"),
      import.meta.url
    ).toString();
  }),
  o.register("7UrVv", function (e, t) {
    e.exports = new URL(
      o("27Lyk").resolve("7lS75"),
      import.meta.url
    ).toString();
  }),
  o("27Lyk").register(
    JSON.parse(
      '{"dZpbI":"index.1fe42e58.js","3TYs3":"rock.c88f7ccf.svg","aJsSp":"paper.5f79bbf0.svg","5z2gr":"scissors.6a2fdda1.svg","4HIA2":"green-star.1eea6986.svg","7lS75":"red-star.342a139d.svg"}'
    )
  );
const r = {
  data: { currentGame: { myPlay: "", computerPlay: "" }, history: [] },
  loadState() {
    const e = localStorage.getItem("state");
    if (e) {
      return JSON.parse(e);
    }
    return this.data;
  },
  saveState(e) {
    localStorage.setItem("state", JSON.stringify(e));
  },
  getState() {
    return this.loadState();
  },
  setState(e) {
    (this.data = e), this.saveState(e);
  },
  setMove(e, t) {
    const n = this.getState();
    (n.currentGame.myPlay = e),
      (n.currentGame.computerPlay = t),
      this.pushToHistory(n.currentGame);
  },
  pushToHistory(e) {
    const t = this.getState();
    t.history.push(e), this.setState(t);
  },
  whoWins(e, t) {
    function n(e, t) {
      return (
        ("scissors" === e && "paper" === t) ||
        ("rock" === e && "scissors" === t) ||
        ("paper" === e && "rock" === t)
      );
    }
    return n(e, t) ? "player" : n(t, e) ? "computer" : "draw";
  },
};
const a = [
    {
      path: /\//,
      component: (function () {
        const e = document.createElement("div");
        return (
          e.classList.add("welcome"),
          (e.innerHTML =
            '<div class="welcome__container">\n  <h1 class="welcome__title">\n    <span>Piedra Papel </span><span class="welcome__title--eton">ó</span>\n    <span>Tijera</span>\n  </h1>\n\n  <div class="welcome__button">\n    <a class="welcome__link" href="./instructions"\n      ><my-button>Empezar</my-button></a\n    >\n  </div>\n</div>\n\n<div class="welcome__hands">\n  <my-move class="welcome__move" type="scissors"></my-move>\n  <my-move class="welcome__move" type="rock"></my-move>\n  <my-move class="welcome__move" type="paper"></my-move>\n</div>'),
          e
        );
      })(),
    },
    {
      path: /\/instructions/,
      component: (function () {
        const e = document.createElement("div");
        return (
          e.classList.add("instructions"),
          (e.innerHTML =
            '<div class="instructions__container">\n  <h2 class="instructions__info">\n    Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3\n    segundos.\n  </h2>\n\n  <div class="instructions__button">\n    <a class="instructions__link" href="./play"\n      ><my-button>¡Jugar!</my-button></a\n    >\n  </div>\n</div>\n\n<div class="instructions__hands">\n  <my-move class="instructions__move" type="scissors"></my-move>\n  <my-move class="instructions__move" type="rock"></my-move>\n  <my-move class="instructions__move" type="paper"></my-move>\n</div>'),
          e
        );
      })(),
    },
    {
      path: /\/play/,
      component: (function () {
        const e = document.createElement("div");
        return (
          e.classList.add("play"),
          (e.innerHTML =
            '<div class="play__container">\n  <my-countdown></my-countdown>\n</div>\n\n<div class="play__hands">\n  <my-move class="play__move" type="scissors"></my-move>\n  <my-move class="play__move" type="rock"></my-move>\n  <my-move class="play__move" type="paper"></my-move>\n</div>'),
          "./play" == location.pathname &&
            (function (e) {
              s(e);
              let t = 3;
              const n = setInterval(() => {
                if ((t--, 0 == t)) {
                  clearInterval(n);
                  const t = document.querySelector(".play__move--select");
                  if (t) {
                    const n = t.getAttribute("type"),
                      s = a();
                    r.setMove(n, s),
                      (e.innerHTML = `<div class="play__result">\n        <my-move\n          class="play__position play__computer"\n          type="${s}"\n        ></my-move>\n        <my-move class="play__position play__player" type="${n}"></my-move>\n      </div>`);
                    i(r.whoWins(n, s));
                  } else l("/instructions");
                }
              }, 1e3);
              function s(e) {
                ["rock", "paper", "scissors"].forEach((t) => {
                  const n = e.querySelector(`[type=${t}]`);
                  n?.addEventListener("click", () => {
                    o(e), n.classList.add("play__move--select");
                  });
                });
              }
              function o(e) {
                e.querySelectorAll(".play__move").forEach((e) => {
                  e.classList.remove("play__move--select"),
                    e.classList.add("play__move--blurred");
                });
              }
              function a() {
                return ["rock", "paper", "scissors"][
                  Math.floor(3 * Math.random())
                ];
              }
              function i(t) {
                const n = setTimeout(() => {
                  clearTimeout(n);
                  const s = document.createElement("div");
                  s.classList.add("result"),
                    "computer" == t
                      ? s.classList.add("result--lose")
                      : s.classList.add("result--win");
                  const o = c();
                  (s.innerHTML = `<div class="result__image">\n        <my-result result="${t}"></my-result>\n      </div>\n      \n      <div class="result__box">\n        <h4 class="result__score">Score</h4>\n        <h5 class="result__text">Vos: ${o.player}</h5>\n        <h5 class="result__text">Máquina: ${o.computer}</h5>\n      </div>\n      \n      <div class="result__button">\n        <a class="result__link" href="../instructions"\n          ><my-button>Volver a Jugar</my-button></a\n        >\n      </div>`),
                    e.appendChild(s);
                }, 1e3);
              }
              function c() {
                const e = r.getState(),
                  t = { player: 0, computer: 0 };
                return (
                  e.history.forEach((e) => {
                    const n = r.whoWins(e.myPlay, e.computerPlay);
                    "player" == n
                      ? t.player++
                      : "computer" == n && t.computer++;
                  }),
                  t
                );
              }
            })(e),
          e
        );
      })(),
    },
  ],
  i = "/dwf-m5-desafio";
function c() {
  return location.host.includes("github.io");
}
function l(e) {
  const t = c() ? i + e : e;
  history.pushState({}, "", t),
    (function (e) {
      const t = document.querySelector(".root"),
        n = c() ? e.replace(i, "") : e;
      for (const e of a)
        if (e.path.test(n)) {
          const n = e.component;
          t.firstChild && t.firstChild.remove(), t.appendChild(n);
        }
    })(t);
}
l(location.pathname),
  (function () {
    class e extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        this.classList.add("button");
        const e = document.createElement("style");
        (e.textContent =
          '.button {\n        font-family: "Odibee Sans";\n        font-weight: 400;\n        font-size: 45px;\n        line-height: 50px;\n        text-align: center;\n        color: var(--light-cyan);\n      \n        width: 100%;\n        height: 100%;\n\n        padding: 9px 0px;\n\n        background-color: var(--brandeis-blue);\n      \n        border: 10px solid var(--imperial-blue);\n        border-radius: 10px;\n\n        display: block;\n      }'),
          this.appendChild(e);
      }
    }
    customElements.define("my-button", e);
  })(),
  (function () {
    class e extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const e = this.getAttribute("type"),
          t = o("cOtVG"),
          n = o("j4Buu"),
          s = o("jgOdn");
        this.innerHTML =
          "" +
          ("rock" === e
            ? `<img class="image" src="${t}">`
            : "paper" === e
            ? `<img class="image" src="${n}">`
            : `<img class="image" src="${s}">`);
        const r = document.createElement("style");
        (r.textContent =
          ".image {\n        width: 100%;\n        height: 100%;\n      }"),
          this.appendChild(r);
      }
    }
    customElements.define("my-move", e);
  })(),
  (function () {
    class e extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        let e = 3;
        const t = document.createElement("p");
        t.classList.add("countdown"), (t.textContent = e.toString());
        const n = setInterval(() => {
            e--, (t.textContent = e.toString()), 0 == e && clearInterval(n);
          }, 1e3),
          s = document.createElement("style");
        (s.innerHTML =
          '.countdown {\n        font-family: "American Typewriter Bold";\n        font-weight: 700;\n        font-size: 100px;\n        line-height: 100%;\n        text-align: center;\n        color: black;\n      }'),
          this.shadow.appendChild(s),
          this.shadow.appendChild(t);
      }
    }
    customElements.define("my-countdown", e);
  })(),
  (function () {
    class e extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
      }
      connectedCallback() {
        this.render();
      }
      render() {
        const e = document.createElement("div");
        e.classList.add("result");
        const t = o("5SRrt"),
          n = o("7UrVv"),
          s = this.getAttribute("result");
        e.innerHTML =
          "player" === s
            ? `<img src="${t}" />\n        <h3 class="text">Ganaste</h3>`
            : "computer" === s
            ? `<img src="${n}" />\n        <h3 class="text">Perdiste</h3>`
            : `<img src="${t}" />\n        <h3 class="text">Empate</h3>`;
        const r = document.createElement("style");
        (r.textContent =
          '.result {\n        position: relative;\n        text-align: center;\n      }\n      \n      .text {\n        font-family: "Odibee Sans";\n        font-style: normal;\n        font-weight: 400;\n        font-size: 55px;\n        line-height: 61px;\n        letter-spacing: 0.05em;\n        color: #ffffff;\n      \n        position: absolute;\n        left: 21.09%;\n        right: 15.77%;\n        top: 37.15%;\n        bottom: 39.39%;\n      \n        margin: 0px;\n      }'),
          this.shadow.appendChild(r),
          this.shadow.appendChild(e);
      }
    }
    customElements.define("my-result", e);
  })();
//# sourceMappingURL=index.1fe42e58.js.map
