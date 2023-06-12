import type { Config } from "tailwindcss";

export default<Partial<Config>> {
  content: [ "./pages/**/*.vue", "./layouts/**/*.vue" ],
  theme: {
    container: {
      padding: {
        DEFAULT: "10rem"
      }
    },
    extend: {
      
    }
  }
}