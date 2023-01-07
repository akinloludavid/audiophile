import { Box, Flex, Icon, Image, Link as Clink } from "@chakra-ui/react"
import MainContainer from "../MainContainer"
import { AiOutlineShoppingCart } from "react-icons/ai"
import logo from "../../assets/shared/desktop/logo.svg"
import { Link } from "react-router-dom"
const navLinks = [
  { label: "HOME", route: "" },
  { label: "HEADPHONES", route: "/headphones" },
  { label: "SPEAKERS", route: "/speakers" },
  { label: "EARPHONES", route: "/earphones" },
]
const Navbar = () => {
  return (
    <MainContainer bgColor={"secColor"} py="32px">
      <Flex justifyContent={"space-between"} w="100%" align="center">
        <Image src={logo} />
        <Flex gap={["34px"]}>
          {navLinks.map((el) => (
            <Clink
              key={el.route}
              as={Link}
              color="white"
              fontSize={"13px"}
              fontWeight="700"
              lineHeight={"25px"}
              _hover={{
                textDecoration: "none",
              }}
              textDecoration={"none"}
              to={el.route}
            >
              {el.label}
            </Clink>
          ))}
        </Flex>

        <Icon
          as={AiOutlineShoppingCart}
          cursor="pointer"
          fontSize="24px"
          color="white"
        />
      </Flex>
    </MainContainer>
  )
}

export default Navbar
