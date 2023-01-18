import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <Link
      _hover={{
        textDecoration: "none",
        color: "pryColor",
        opacity: 1,
      }}
      width="fit-content"
      variant={"link"}
      onClick={() => navigate(-1)}
      color="#000000"
      opacity="0.5"
      fontWeight="500"
      fontSize="15px"
      lineHeight=" 25px"
      my={["16px", "32px", "79px"]}
    >
      Go Back
    </Link>
  );
};

export default GoBack;
