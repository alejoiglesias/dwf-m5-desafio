import { initWelcomePage } from "./pages/welcome/welcome";
import { initInstructionsPage } from "./pages/instructions/instructions";
import { initPlayPage } from "./pages/play/play";

const routes = [
  {
    path: /\//,
    component: initWelcomePage,
  },

  {
    path: /\/instructions/,
    component: initInstructionsPage,
  },

  {
    path: /\/play/,
    component: initPlayPage,
  },
];

const BASE_PATH = "/dwf-m5-desafio";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter() {
  const newRoute = isGithubPages()
    ? location.pathname.replace(BASE_PATH, "")
    : location.pathname;

  goTo(newRoute);
}

export function goTo(path: string) {
  const completePath = isGithubPages() ? BASE_PATH + path : path;

  history.pushState({}, "", completePath);

  handleRoute(completePath);
}

function handleRoute(route: string) {
  const root = document.querySelector(".root") as Element;

  const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

  for (const r of routes) {
    if (r.path.test(newRoute)) {
      const element = r.component;

      if (root.firstChild) {
        root.firstChild.remove();
      }

      root.appendChild(element());
    }
  }
}
