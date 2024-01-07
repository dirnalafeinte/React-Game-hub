import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {Platform} from "../hooks/UsePlatform.ts";

export interface Props {
    platforms : Platform[]
}

export const PlatformIcons = ({platforms} : Props) => {
    const icons : {[key : string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack marginY={2}>
            {platforms.map(platform => <Icon key={platform.id} as={icons[platform.slug]} color={'grey'} />)}
        </HStack>
    );
};
