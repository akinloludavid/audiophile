import { useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { AppRoutes } from "./routes";

export const AppRouteWrapper = () => {
  const routes = useRoutes(AppRoutes);
  return routes;
};

export const Pages = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <PageLayout>
      <AppRouteWrapper />
    </PageLayout>
  );
};
