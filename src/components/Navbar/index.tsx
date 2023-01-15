import { Box, Flex, Icon, Image, Link as Clink } from "@chakra-ui/react";
import MainContainer from "../MainContainer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/shared/desktop/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { HOME } from "../../routes/pathnames";
import useCustomMediaQuery from "../../customHooks/mediaQuery";
import MenuSection from "../MenuSection";
import { useState } from "react";
export const navLinks = [
  { label: "HOME", route: "" },
  { label: "HEADPHONES", route: "/headphones" },
  { label: "SPEAKERS", route: "/speakers" },
  { label: "EARPHONES", route: "/earphones" },
];
const Navbar = () => {
  const navigate = useNavigate();
  const { isTablet } = useCustomMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <>
      <MenuSection isOpen={isMenuOpen} onClose={handleCloseMenu} />
      <MainContainer bgColor={"secColor"} w="100vw">
        <Flex
          justifyContent={"space-between"}
          w="100%"
          align="center"
          borderBottom="1px solid #ffffff40"
          py="32px"
        >
          <Flex align={"center"} gap="42px">
            <Icon
              display={isTablet ? "block" : "none"}
              as={GiHamburgerMenu}
              color="white"
              cursor="pointer"
              onClick={handleToggleMenu}
            />
            <Image
              src={logo}
              alt="Audiophile logo"
              cursor={"pointer"}
              onClick={() => navigate(HOME)}
            />
          </Flex>
          <Flex gap={["34px"]} display={isTablet ? "none" : "flex"}>
            {navLinks.map((el) => (
              <Clink
                key={el.route}
                as={Link}
                color="white"
                fontSize={"13px"}
                fontWeight="700"
                lineHeight={"25px"}
                cursor="pointer"
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
    </>
  );
};

export default Navbar;
