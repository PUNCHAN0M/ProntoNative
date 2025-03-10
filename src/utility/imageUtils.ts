import { ImageSourcePropType } from "react-native";
const CouplingNormexPicture = require("@assets/Infomation/CouplingNormex/CouplingNormex.png");
const GENEVAwheel = require("@assets/Infomation/GENEVAwheel/GENEVAwheel.png");
const BracketorMountingArm = require("@assets/Infomation/BracketorMountingArm/Bracket.png");
const BasePlatewithBracket = require("@assets/Infomation/BasePlatewithBracket/BasePlatewithBracket.png");
const AirCompressorFan = require("@assets/Infomation/AirCompressorFan/AirCompressorFan.png");


export const getModelImage = (model: string): ImageSourcePropType | null => {
  switch (model) {
    case "CouplingNormex":
      return CouplingNormexPicture;
    case "GENEVAwheel":
      return GENEVAwheel;
    case "BracketorMountingArm":
      return BracketorMountingArm;
    case "BasePlatewithBracket":
      return BasePlatewithBracket;
    case "AirCompressorFan":
      return AirCompressorFan;
      
    default:
      return null; // No image found
  }
};
