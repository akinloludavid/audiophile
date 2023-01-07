// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/components/input.ts

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
    borderRadius: "none",
    paddingBottom: "18px",
    border: "none",
    borderBottom: "1px solid #5A698F",
    bgColor: "transparent",
    fontSize: "15px",
    fontWeight: "300",
    lineHeight: "30px",
    color: "#fff",
    _placeholder: {
      color: "#fff",
      opacity: 0.5,
      fontSize: "15px",
      fontWeight: "300",
      lineHeight: "30px",
    },
    _focus: {
      border: "none",
      borderBottom: "1px solid #ffffff",
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
