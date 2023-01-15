import React from "react";
import AudioPhileInfo from "../../components/AudioFileInfo";
import FlexBox from "../../components/FlexBox";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { earphonesSelector, useZustStore } from "../../zust/store";
import CategorySection from "../Home/CategorySection";

const Earphones = () => {
  const earphonesList = useZustStore(earphonesSelector);
  return (
    <>
      <Header title="Earphones" />
      <MainContainer flexDirection={"column"} mt="160px">
        {earphonesList.map((earphone: any, idx: number) => (
          <FlexBox
            key={earphone.slug}
            {...earphone}
            rightPos={idx % 2 === 1 ? true : false}
          />
        ))}

        <CategorySection />
        <AudioPhileInfo />
      </MainContainer>
    </>
  );
};

export default Earphones;
