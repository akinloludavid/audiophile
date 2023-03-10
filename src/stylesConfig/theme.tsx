import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./customComponents/Button";
import { TextStyle as Text } from "./customComponents/Text";
import { HeadingStyle as Heading } from "./customComponents/Heading";
import { InputStyles as Input } from "./customComponents/Input";
import { FormLabelStyles as FormLabel } from "./customComponents/FormLabel";

import { colors } from "./customComponents/colors";
const components = {
  Button,
  Text,
  Heading,
  Input,
  FormLabel,
};
export const customTheme = extendTheme({
  fonts: {
    heading: "Manrope, sans-serif",
    body: "Manrope, sans-serif",
  },
  components,
  colors,
});
