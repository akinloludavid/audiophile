import { Flex, Heading, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";

const LazyLoader = () => {
  return (
    <Flex w="100vw" h="100vh" justify={"center"} align="center">
      <Spinner color="pryColor" thickness="2px" size="lg" />
    </Flex>
  );
};
const WithSuspense = (Component: React.FC) => (props: any) => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default WithSuspense;
