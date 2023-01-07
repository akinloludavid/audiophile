export const TextStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#D87D4A",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    mainText: {
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "25px",
      letterSpacing: "10px",
    },
    lightText: {
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "17px",
      letterSpacing: "1px",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "mainText",
  },
};
