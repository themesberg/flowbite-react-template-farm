import { initThemeMode } from "flowbite-react/theme/mode-script";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import { Main } from "./main";
import "./index.css";

const container = document.querySelector("#root") as Element;
const root = createRoot(container);

root.render(
  <>
    <ThemeInit />
    <Main />
  </>,
);

initThemeMode();
