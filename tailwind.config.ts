import type { Config } from "tailwindcss";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default<Partial<Config>> {
  content: [ './pages/**/*.vue', './layouts/**/*.vue' ],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({ collections: getIconCollections(["twemoji"]) })
  ],
}

