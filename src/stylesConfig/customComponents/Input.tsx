// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/components/input.ts

import { colors } from "./colors";

const search = {
  field: {
    caretColor: "#D87D4A",
    borderRadius: "8px",
    padding: "18px 24px",
    border: "1px solid #CFCFCF",
    outline: "none",
    bgColor: "transparent",
    fontSize: "24px",
    fontWeight: "300",
    lineHeight: "30px",
    w: ["309px"],
    h: "56px",
    color: "#fff",
    _placeholder: {
      color: "#000000",
      opacity: 0.4,
      fontSize: ["14px"],
      fontWeight: "700",
      lineHeight: "19px",
    },
    _focus: {
      border: "1px solid #D87D4A",
    },
  },
};
const primary = {
  field: {
    caretColor: "#D87D4A",
    borderRadius: "8px",
    border: "1px solid #CFCFCF",
    bgColor: "transparent",
    padding: "18px 24px",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "30px",
    height: "56px",

    color: colors.secColor,
    _placeholder: {
      color: "#000000",
      opacity: 0.4,
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "19px",
    },
    _focus: {
      border: "1px solid #D87D4A",
    },
  },
};
export const InputStyles = {
  baseStyle: {},
  variants: {
    search,
    primary,
  },
  defaultProps: {
    variant: "primary",
  },
};
