import { defineConfig } from "@farmfe/core";
import farmPluginPostcss from "@farmfe/js-plugin-postcss";
import flowbiteReact from "flowbite-react/plugin/farm";

export default defineConfig({
  plugins: ["@farmfe/plugin-react", farmPluginPostcss(), flowbiteReact()],
});