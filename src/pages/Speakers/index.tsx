import { Box } from "@chakra-ui/react";
import React from "react";
import AudioPhileInfo from "../../components/AudioFileInfo";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { speakersSelector, useZustStore } from "../../zust/store";
import CategorySection from "../Home/CategorySection";

const Speakers = () => {
  const speakersLists = useZustStore(speakersSelector);
  return (
    <Box>
      <Header title="SPEAKERS" />
      <MainContainer flexDirection={["column"]} mt={["160px"]}>
        {speakersLists.map((speaker, idx) => (
          <FlexBox
            key={speaker.slug}
            {...speaker}
            rightPos={idx % 2 === 1 ? true : false}
          />
        ))}

        <CategorySection />

        <AudioPhileInfo />
      </MainContainer>
    </Box>
  );
};

export default Speakers;
