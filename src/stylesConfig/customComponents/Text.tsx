import { colors } from "./colors";

export const TextStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#000000",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    body: {
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "25px",
      color: "#000000",
      opacity: "0.5",
      // letterSpacing: "10px",
    },
    lightText: {
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "17px",
      letterSpacing: "1px",
    },
    error: {
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "17px",
      letterSpacing: "1px",
      color: colors.danger,
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "body",
  },
};
