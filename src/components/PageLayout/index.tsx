import { Box } from "@chakra-ui/react"
import { IChildren } from "../../types"
import Navbar from "../Navbar"

const PageLayout = ({ children }: IChildren) => {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  )
}

export default PageLayout
