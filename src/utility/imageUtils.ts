import { ImageSourcePropType } from "react-native";
const CouplingNormexPicture = require("@assets/Infomation/CouplingNormex/CouplingNormex.png");
const Pronto = require("@assets/Pronto.png");
const Test = require("@assets/icon.png");

export const getModelImage = (model: string): ImageSourcePropType | null => {
  switch (model) {
    case "CouplingNormex":
      return CouplingNormexPicture;
    case "Pronto":
      return Pronto;
    case "test":
      return Test;
    default:
      return null; // No image found
  }
};
