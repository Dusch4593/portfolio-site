import Typography from "typography"
import sternGroveTheme from "typography-theme-stern-grove"

const typography = new Typography(sternGroveTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
