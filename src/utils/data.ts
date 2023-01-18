import { EarphoneCategory, HeadsetCategory, SpeakerCategory } from "../asset";
import { ICategoryCard } from "../types";

export const categoryList: ICategoryCard[] = [
  {
    image: HeadsetCategory,
    route: "/headphones",
    title: "HEADPHONES",
  },
  {
    image: SpeakerCategory,
    route: "/speakers",
    title: "SPEAKERS",
  },
  {
    image: EarphoneCategory,
    route: "/earphones",
    title: "EARPHONES",
  },
];
