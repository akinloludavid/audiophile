import { Box, Flex, Icon, Image, Link as Clink, Text } from "@chakra-ui/react";
import MainContainer from "../MainContainer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { HOME } from "../../routes/pathnames";
import useCustomMediaQuery from "../../customHooks/mediaQuery";
import MenuSection from "../MenuSection";
import { useState } from "react";
import { useZustStore } from "../../zust/store";
import CartSection from "../CartSection";
import { Logo } from "../../asset";
export const navLinks = [
  { label: "HOME", route: "" },
  { label: "HEADPHONES", route: "/headphones" },
  { label: "SPEAKERS", route: "/speakers" },
  { label: "EARPHONES", route: "/earphones" },
];
const Navbar = () => {
  const navigate = useNavigate();
  const { isTablet } = useCustomMediaQuery();
  const { cart } = useZustStore((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <MenuSection isOpen={isMenuOpen} onClose={handleCloseMenu} />
      <MainContainer
        bgColor={"secColor"}
        w="100vw"
        position="fixed"
        h="97px"
        zIndex="999999"
      >
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
              src={Logo}
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
          <Box
            position="relative"
            cursor="pointer"
            onClick={() => setShowCart(true)}
          >
            <Icon
              as={AiOutlineShoppingCart}
              cursor="pointer"
              fontSize="24px"
              color="white"
              zIndex={"9999"}
            />
            <Box
              zIndex={"0"}
              top="-10px"
              right="-10px"
              position="absolute"
              borderRadius={"50%"}
              h="16px"
              w="16px"
              display={cart.length === 0 ? "none" : "flex"}
              justifyContent="center"
              alignItems="center"
              bgColor={"white"}
            >
              <Text fontSize={"12px"} fontWeight="700">
                {cart.length}
              </Text>
            </Box>
          </Box>
        </Flex>
      </MainContainer>
      {showCart && <CartSection setShowCart={setShowCart} />}
    </>
  );
};

export default Navbar;
