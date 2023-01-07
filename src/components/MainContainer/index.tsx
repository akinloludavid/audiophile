import { BoxProps, Flex } from "@chakra-ui/react"
import { IChildren } from "../../types"

interface IMainContainer extends BoxProps {
  children: React.ReactNode
}
const MainContainer = ({ children, ...rest }: IMainContainer) => {
  return (
    <Flex maxW={"1440px"} mx="auto" px={["165px"]} {...rest}>
      {children}
    </Flex>
  )
}

export default MainContainer
