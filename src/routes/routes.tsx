import { Box } from "@chakra-ui/react";
import { lazy } from "react";
import WithSuspense from "../components/WithSuspense";
import { IAppRoute } from "../types";
import {
  HOME,
  HEADPHONES,
  EARPHONES,
  SPEAKERS,
  PRODUCT_DETAIL,
  CHECKOUT,
} from "./pathnames";

const HomePage = WithSuspense(lazy(() => import("../pages/Home")));
const HeadphonesPage = WithSuspense(lazy(() => import("../pages/Headphones")));
const EarphonesPage = WithSuspense(lazy(() => import("../pages/Earphones")));
const SpeakersPage = WithSuspense(lazy(() => import("../pages/Speakers")));
const ProductDetailsPage = WithSuspense(
  lazy(() => import("../pages/ProductDetails"))
);
const CheckoutPage = WithSuspense(lazy(() => import("../pages/Checkout")));
export const AppRoutes: IAppRoute[] = [
  { path: HOME, element: <HomePage /> },
  { path: HEADPHONES, element: <HeadphonesPage /> },
  { path: EARPHONES, element: <EarphonesPage /> },
  { path: SPEAKERS, element: <SpeakersPage /> },
  {
    path: PRODUCT_DETAIL,
    element: <ProductDetailsPage />,
    errorElement: <Box color="black">Error</Box>,
  },
  { path: CHECKOUT, element: <CheckoutPage /> },
];
