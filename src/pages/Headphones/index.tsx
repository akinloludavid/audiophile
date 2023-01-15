import { Box } from "@chakra-ui/react";
import AudioPhileInfo from "../../components/AudioFileInfo";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { headphonesSelector, useZustStore } from "../../zust/store";
import CategorySection from "../Home/CategorySection";

const Headphones = () => {
  const headphonesList = useZustStore(headphonesSelector);
  return (
    <Box>
      <Header title="HEADPHONES" />
      <MainContainer flexDirection={"column"} mt="160px">
        {headphonesList.map((headphones, idx) => (
          <FlexBox
            key={headphones.slug}
            {...headphones}
            rightPos={idx % 2 === 1 ? true : false}
            mb="210px"
          />
        ))}
        <CategorySection />
        <AudioPhileInfo />
      </MainContainer>
    </Box>
  );
};

export default Headphones;
