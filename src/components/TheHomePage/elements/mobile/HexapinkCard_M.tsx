import React from "react";
import Image, { StaticImageData } from "next/image";

import "@/style/TheHomePage/font.css";
import HexapinkCardFolderTab_M from "./HexapinkCardFolderTab_M";
import HexapinkCardLocationTab_M from "./HexapinkCardLocationTab_M";
interface HexapinkCardProps {
  img_1: StaticImageData;
  img_2: StaticImageData;
  location: string;
  folder: string;
}
const HexapinkCard_M: React.FC<HexapinkCardProps> = ({img_1, img_2, location, folder,}) => {
  return (
    <div className="min-w-[360px] max-w-[360px] min-h-[360px] max-h-[360px] m-8 rounded-2xl bg-[#FFE5EE] relative -z-20">
      <div className="absolute bottom-0 right-0 w-full h-auto -z-10">
        <Image
          src={img_1}
          alt="image-hexa-m"
          className=" select-none w-full rounded-2xl"
        />
      </div>
      <div className="right-0 top-[30px] absolute w-[35%] h-auto -z-10">
        <Image src={img_2} alt="Hp" className=" select-none" />
      </div>
      <div className="flex flex-col justify-start items-center gap-3 w-[80%] h-full ml-7 mt-12">
        <h1 className="text-2xl font-[kanit-bold] text-[#333333] select-none">
          Propriétaires de Maisons
        </h1>
        <p className="text-sm font-[raleway-medium] text-[#666666] select-none text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="absolute left-0 -top-[20px]">
        <HexapinkCardLocationTab_M text={location} />
      </div>
      <div className="absolute left-0 -top-[20px]">
        <HexapinkCardFolderTab_M text={folder} />
      </div>
    </div>
  );
};

export default HexapinkCard_M;
