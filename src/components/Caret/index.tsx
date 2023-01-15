import { Icon } from "@chakra-ui/react"
import { FC } from "react"
import { RxCaretRight } from "react-icons/rx"

const Caret: FC<{ color?: string }> = ({ color = "#D87D4A" }) => {
  return (
    <Icon as={RxCaretRight} color={color} fontSize="20px" strokeWidth={"1"} />
  )
}

export default Caret
