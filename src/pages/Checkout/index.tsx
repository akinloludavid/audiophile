import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { BsCheckCircleFill } from "react-icons/bs";
import GoBack from "../../components/GoBack";
import MainContainer from "../../components/MainContainer";
import { useZustStore } from "../../zust/store";
import { shortenProductName } from "../../utils/helper";
import { CashOnDelivery } from "../../asset";
import ModalContainer from "../../components/ModalContainer";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../routes/pathnames";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, emptyCart } = useZustStore((state) => state);
  const totalAmount = cart.reduce(
    (acc, curr: any) => acc + curr.price * curr.quantity,
    0
  );

  const vat = Number((totalAmount * 0.2).toFixed(2));
  const shippingFees = 50;
  const grandTotal = Number((vat + totalAmount).toFixed(2));
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    zipcode: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "",
    eMoneyNumber: "",
    eMoneyPin: "",
  };
  const handleSubmit = () => {
    setIsCheckoutModalOpen(true);
  };
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Required"),
    email: Yup.string().email("Wrong format").required("Required"),
    phone: Yup.string().required("Required"),
    zipcode: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    paymentMethod: Yup.string().required("Required"),
    eMoneyNumber: Yup.string(),
    eMoneyPin: Yup.string(),
  });
  const errorBorderStyle = "2px solid #CD2C2C";
  const normalBorderStyle = "1px solid #CFCFCF";
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const handleCloseCheckoutModal = () => {
    setIsCheckoutModalOpen(false);
  };
  const goBackHome = () => {
    navigate(HOME);
    emptyCart();
  };
  useEffect(() => {
    if (cart.length === 0) {
      navigate(HOME);
    }
  }, [cart.length]);
  return (
    <>
      <ModalContainer
        isOpen={isCheckoutModalOpen}
        onClose={handleCloseCheckoutModal}
      >
        <Box
          p={["32px", "32px", "48px"]}
          mx="auto"
          borderRadius="8px"
          bgColor="#FFF"
          w={["90%", "90%", "540px"]}
          mb="50px"
        >
          <Icon
            width={"64px"}
            h="64px"
            as={BsCheckCircleFill}
            color="pryColor"
            mb={["33px"]}
          />

          <Heading as="h3" variant={"h3"}>
            THANK YOU
          </Heading>
          <Heading as="h3" variant={"h3"} mb={["24px"]}>
            FOR YOUR ORDER
          </Heading>
          <Text mb={["33px"]}>
            You will receive an email confirmation shortly.
          </Text>

          <Flex mb="48px" flexDir={["column", "column", "row"]}>
            <Box
              borderTopLeftRadius={"8px"}
              borderTopRightRadius={["8px", "8px", 0]}
              borderBottomLeftRadius={[0, 0, "8px"]}
              w={["100%", "100%", "60%"]}
              p={["24px"]}
              bgColor="#F1F1F1"
            >
              {cart.slice(0, 1).map((item: any) => (
                <Flex key={nanoid()} align="flex-start">
                  <Box w={["80%"]}>
                    <Flex gap={["16px"]} align="flex-start">
                      <Box
                        w={["50px"]}
                        h={["50px"]}
                        borderRadius={"8px"}
                        bgColor="#F1F1F1"
                        // p="12px"
                      >
                        <Image borderRadius={"8px"} src={item.image.desktop} />
                      </Box>
                      <Box>
                        <Text color="secColor" opacity={1}>
                          {shortenProductName(item.name)}
                        </Text>
                        <Text textAlign="left" fontWeight={"700"}>
                          $ {item.price.toLocaleString()}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Box w="20%">
                    <Text textAlign={"right"}>x {item.quantity}</Text>
                  </Box>
                </Flex>
              ))}
              <Box mt={["12px"]} h="1px" bgColor={"secColor"} opacity="0.08" />
              <Text fontSize={"12px"} fontWeight="700" textAlign={"center"}>
                {" "}
                and {cart.length - 1} other item(s)
              </Text>
            </Box>
            <Box
              borderBottomLeftRadius={["8px", "8px", 0]}
              borderTopRightRadius={[0, 0, "8px"]}
              borderBottomRightRadius="8px"
              w={["100%", "100%", "40%"]}
              bgColor="#000000"
              pl={["24px"]}
              py={["42px"]}
            >
              <Text color="#fff" opacity="0.5">
                GRAND TOTAL
              </Text>
              <Text
                color="white"
                opacity={1}
                mt={["8px"]}
                fontSize="18px"
                fontWeight={"700"}
              >
                ${grandTotal}
              </Text>
            </Box>
          </Flex>

          <Button minW={["full"]} onClick={goBackHome}>
            BACK TO HOME
          </Button>
        </Box>
      </ModalContainer>
      <MainContainer bgColor={"#f2f2f2"} minH="100%">
        <GoBack />

        <Box>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              dirty,
              isValid,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid
                  templateColumns={[
                    "repeat(1,1fr)",
                    "repeat(1,1fr)",
                    "repeat(1,1fr)",
                    "repeat(3,1fr)",
                  ]}
                  gap={["32px"]}
                  mb={["141px"]}
                >
                  <GridItem
                    pb="48px"
                    borderRadius={"8px"}
                    bgColor={"white"}
                    pt={["24px", "24px", "54px"]}
                    px={["24px", "24px", "48px"]}
                    colSpan={[1, 1, 1, 2]}
                  >
                    <Heading variant={["h4", "h4", "h3"]} as="h3" mb={["41px"]}>
                      CHECKOUT
                    </Heading>
                    <Text
                      opacity={1}
                      fontWeight={["700"]}
                      textTransform={"uppercase"}
                      color="pryColor"
                      mb={["16px"]}
                    >
                      Billing Details
                    </Text>
                    <Grid
                      templateColumns={[
                        "repeat(1,1fr)",
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                      ]}
                      columnGap={["16px"]}
                      rowGap={["24px"]}
                      mb={["53px"]}
                    >
                      <GridItem>
                        <FormControl>
                          <Flex
                            justify={"space-between"}
                            align="center"
                            mb="9px"
                          >
                            <FormLabel
                              my="auto"
                              htmlFor="fullname"
                              color={
                                touched.fullname && errors.fullname
                                  ? "danger"
                                  : "secColor"
                              }
                            >
                              Name
                            </FormLabel>
                            <Text variant="error" color="danger">
                              {touched.fullname && errors.fullname}
                            </Text>
                          </Flex>
                          <Input
                            id="fullname"
                            name="fullname"
                            type="text"
                            value={values.fullname}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Alexei Ward"
                            border={
                              touched.fullname && errors.fullname
                                ? errorBorderStyle
                                : normalBorderStyle
                            }
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl>
                          <Flex
                            justify={"space-between"}
                            align="center"
                            mb="9px"
                          >
                            <FormLabel
                              my="auto"
                              htmlFor="email"
                              color={
                                touched.email && errors.email
                                  ? "danger"
                                  : "secColor"
                              }
                            >
                              Email
                            </FormLabel>
                            <Text variant="error" color="danger">
                              {touched.email && errors.email}
                            </Text>
                          </Flex>

                          <Input
                            id="email"
                            type="email"
                            name="email"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="alexei@mail.com"
                            border={
                              touched.email && errors.email
                                ? errorBorderStyle
                                : normalBorderStyle
                            }
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl>
                          <Flex
                            justify={"space-between"}
                            align="center"
                            mb="9px"
                          >
                            <FormLabel
                              my="auto"
                              htmlFor="phone"
                              color={
                                touched.phone && errors.phone
                                  ? "danger"
                                  : "secColor"
                              }
                            >
                              Phone
                            </FormLabel>
                            <Text variant="error" color="danger">
                              {touched.phone && errors.phone}
                            </Text>
                          </Flex>
                          <Input
                            name="phone"
                            id="phone"
                            placeholder="+1 202-555-0136"
                            value={values.phone}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            border={
                              touched.phone && errors.phone
                                ? errorBorderStyle
                                : normalBorderStyle
                            }
                          />
                        </FormControl>
                      </GridItem>{" "}
                    </Grid>
                    <Text
                      opacity={1}
                      fontWeight={["700"]}
                      textTransform={"uppercase"}
                      color="pryColor"
                      mb={["16px"]}
                    >
                      SHIPPING INFO
                    </Text>

                    <Grid
                      templateColumns={[
                        "repeat(1,1fr)",
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                      ]}
                      columnGap={["16px"]}
                      rowGap={["24px"]}
                      mb={["61px"]}
                    >
                      <GridItem colSpan={[1, 1, 2]}>
                        <FormControl>
                          <Flex
                            justify={"space-between"}
                            align="center"
                            mb="9px"
                          >
                            <FormLabel
                              my="auto"
                              htmlFor="address"
                              color={
                                touched.address && errors.address
                                  ? "danger"
                                  : "secColor"
                              }
                            >
                              Address
                            </FormLabel>
                            <Text variant="error" color="danger">
                              {touched.address && errors.address}
                            </Text>
                          </Flex>
                          <Input
                            name="address"
                            id="address"
                            placeholder="1137 Williams Avenue"
                            value={values.address}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            border={
                              touched.address && errors.address
                                ? errorBorderStyle
                                : normalBorderStyle
                            }
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl>
                          <Flex
                            justify={"space-between"}
                            align="center"
                            mb="9px"
                          >
                            <FormLabel
                              color={
                                touched.zipcode && errors.zipcode
                                  ? "danger"
                                  : "secColor"
                              }
                              my="auto"
                              htmlFor="zip"
                            >
                              ZIP Code
                            </FormLabel>
                            <Text variant="error" color="danger">
                              {touched.zipcode && errors.zipcode}
                            </Text>
                          </Flex>
                          <Input
                            name="zipcode"
                            id="zip"
                            placeholder="10001"
                            value={values.zipcode}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            border={
                              touched.zipcode && errors.zipcode
                                ? errorBorderStyle
                                : normalBorderStyle
                            }
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl>
                          <Flex
                            justify={"space-between"}
                            align="center"
                            mb="9px"
                          >
                            <FormLabel
                              my="auto"
                              htmlFor="city"
                              color={
                                touched.city && errors.city
                                  ? "danger"
                                  : "secColor"
                              }
                            >
                              City
                            </FormLabel>
                            <Text variant="error" color="danger">
                              {touched.city && errors.city}
                            </Text>
                          </Flex>
                          <Input
                            name="city"
                            id="city"
                            placeholder="New York"
                            value={values.city}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            border={
                              touched.city && errors.city
                                ? errorBorderStyle
                                : normalBorderStyle
                            }
                          />
                        </FormControl>
                      </GridItem>
                      <GridItem>
                        <FormControl>
                          <Flex
                            justify={"space-between"}
                            align="center"
                            mb="9px"
                          >
                            <FormLabel
                              my="auto"
                              htmlFor="country"
                              color={
                                touched.country && errors.country
                                  ? "danger"
                                  : "secColor"
                              }
                            >
                              Country
                            </FormLabel>
                            <Text variant="error" color="danger">
                              {touched.country && errors.country}
                            </Text>
                          </Flex>
                          <Input
                            name="country"
                            id="country"
                            placeholder="United States"
                            value={values.country}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            border={
                              touched.country && errors.country
                                ? errorBorderStyle
                                : normalBorderStyle
                            }
                          />
                        </FormControl>
                      </GridItem>
                    </Grid>
                    <Text
                      opacity={1}
                      fontWeight={["700"]}
                      textTransform={"uppercase"}
                      color="pryColor"
                      mb={["16px"]}
                    >
                      PAYMENT DETAILS
                    </Text>
                    <Grid
                      templateColumns={[
                        "repeat(1,1fr)",
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                      ]}
                      columnGap={["16px"]}
                      rowGap={["16px", "24px"]}
                    >
                      <GridItem>
                        <FormLabel>Payment Method</FormLabel>
                      </GridItem>
                      <GridItem>
                        <RadioGroup
                          display={"flex"}
                          flexDir={["column"]}
                          gap={[4, 4, 8, 8]}
                        >
                          <Flex
                            align={"center"}
                            gap={["16px"]}
                            border="1px solid #CFCFCF"
                            borderRadius={"8px"}
                            px="16px"
                            cursor="pointer"
                          >
                            <Field
                              type="radio"
                              name="paymentMethod"
                              id="e-Money"
                              value={"e-Money"}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />

                            <FormLabel
                              py="18px"
                              w="100%"
                              my="auto"
                              htmlFor="e-Money"
                            >
                              e-Money
                            </FormLabel>
                          </Flex>
                          <Flex
                            align={"center"}
                            gap={["16px"]}
                            border="1px solid #CFCFCF"
                            borderRadius={"8px"}
                            px="16px"
                            cursor="pointer"
                          >
                            <Field
                              type="radio"
                              id="cash-on-delivery"
                              name="paymentMethod"
                              value={"cash-on-delivery"}
                              onBlur={handleBlur}
                              onChange={handleChange}
                            />
                            <FormLabel
                              my="auto"
                              py="18px"
                              w="100%"
                              htmlFor="cash-on-delivery"
                            >
                              Cash on Delivery
                            </FormLabel>
                          </Flex>
                        </RadioGroup>
                      </GridItem>
                      {values.paymentMethod === "e-Money" && (
                        <>
                          <GridItem mt={["24px", "24px", 0]}>
                            <FormControl>
                              <FormLabel htmlFor="eMoneyNumber">
                                e-Money Number
                              </FormLabel>
                              <Input
                                id="eMoneyNumber"
                                name="eMoneyNumber"
                                placeholder="238521993"
                              />
                            </FormControl>
                          </GridItem>
                          <GridItem>
                            <FormControl>
                              <FormLabel htmlFor="eMoneyPin">
                                e-Money PIN
                              </FormLabel>
                              <Input
                                id="eMoneyPin"
                                name="eMoneyPin"
                                placeholder="6691"
                              />
                            </FormControl>
                          </GridItem>
                        </>
                      )}
                      {values.paymentMethod === "cash-on-delivery" && (
                        <GridItem
                          colSpan={[1, 1, 1, 2]}
                          display={"flex"}
                          gap={["32px"]}
                          flexDir={["column", "column", "row"]}
                        >
                          <Image
                            w={["20%", "auto"]}
                            src={CashOnDelivery}
                            alt="cash on delivery"
                          />
                          <Text>
                            The ‘Cash on Delivery’ option enables you to pay in
                            cash when our delivery courier arrives at your
                            residence. Just make sure your address is correct so
                            that your order will not be cancelled.
                          </Text>
                        </GridItem>
                      )}
                    </Grid>
                  </GridItem>
                  <GridItem colSpan={1} w="100%">
                    <Box
                      p="32px"
                      bgColor={"white"}
                      borderRadius="8px"
                      maxH="700px"
                      overflowY={"scroll"}
                      w="100%"
                    >
                      <Heading
                        mb={["31px"]}
                        color={"secColor"}
                        variant={"h6"}
                        as="h6"
                      >
                        SUMMARY
                      </Heading>
                      {cart.map((item: any) => (
                        <Flex
                          align="center"
                          justify={"space-between"}
                          key={nanoid()}
                          mb="24px"
                        >
                          <Box>
                            <Flex gap={["16px"]} align="center">
                              <Box
                                w={["64px"]}
                                h={["64px"]}
                                borderRadius={"8px"}
                                bgColor="#F1F1F1"
                                // p="12px"
                              >
                                <Image
                                  borderRadius={"8px"}
                                  src={item.image.desktop}
                                />
                              </Box>
                              <Box>
                                <Text color="secColor" opacity={1}>
                                  {shortenProductName(item.name)}
                                </Text>
                                <Text textAlign="left">$ {item.price}</Text>
                              </Box>
                            </Flex>
                          </Box>
                          <Box>
                            <Text>x {item.quantity}</Text>
                          </Box>
                        </Flex>
                      ))}
                      <Flex align={"center"} justify="space-between" mb="8px">
                        <Text>TOTAL</Text>
                        <Text color="secColor" opacity={1}>
                          $ {totalAmount.toLocaleString()}
                        </Text>
                      </Flex>
                      <Flex align={"center"} justify="space-between" mb="8px">
                        <Text>SHIPPING</Text>
                        <Text color="secColor" opacity={1}>
                          $ {shippingFees}
                        </Text>
                      </Flex>
                      <Flex align={"center"} justify="space-between" mb="24px">
                        <Text>VAT (INCLUDED)</Text>
                        <Text color="secColor" opacity={1}>
                          $ {vat.toLocaleString()}
                        </Text>
                      </Flex>
                      <Flex
                        align={"center"}
                        justify="space-between"
                        mb="32px"
                        mt="24px"
                      >
                        <Text>GRAND TOTAL</Text>
                        <Text color="pryColor" fontWeight={"700"} opacity={1}>
                          ${grandTotal}
                        </Text>
                      </Flex>
                      <Button
                        type="submit"
                        isDisabled={!isValid}
                        minW={["full"]}
                        _disabled={{
                          bgColor: "#f2f2f2",
                          color: "gray",
                          cursor: "not-allowed",
                        }}
                        _hover={{}}
                      >
                        CONTINUE AND PAY
                      </Button>
                    </Box>
                  </GridItem>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </MainContainer>
    </>
  );
};

export default CheckoutPage;
