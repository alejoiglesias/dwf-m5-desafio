import { initRouter } from "./router";
import { initButtonComponent } from "./components/button";
import { initMoveComponent } from "./components/move";
import { initCountdownComponent } from "./components/countdown";
import { initResultComponent } from "./components/result";

(function main() {
  initRouter();

  initButtonComponent();
  initMoveComponent();
  initCountdownComponent();
  initResultComponent();
})();
