// Import theme
import createTheme from "spectacle/lib/themes/default"

// Require CSS
require("normalize.css")

export const colors = {
  primary: "white",
  secondary: "#100830",
  tertiary: "#73E9AC",
  quartenary: "#9E79F3"
}

export default createTheme(colors, {
  primary: "Montserrat",
  secondary: "Helvetica"
})
