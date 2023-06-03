import type { Config } from "tailwindcss";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

export default<Partial<Config>> {
  content: [ "./pages/**/*.vue", "./layouts/**/*.vue" ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E0AAFF",
          200: "#C77DFF",
          300: "#9D4EDD",
          400: "#7B2CBF",
          500: "#5A189A",
          600: "#3C096C",
          700: "#240046",
          800: "#10002B",
        }
      }
    }
  },
  plugins: [
    iconsPlugin({ collections: getIconCollections(["twemoji"]) })
  ],
}