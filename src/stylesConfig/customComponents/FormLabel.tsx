import { colors } from "./colors";

export const FormLabelStyles = {
  // style object for base or default style
  baseStyle: {
    color: colors.secColor,
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "16px",

      color: colors.secColor,
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
