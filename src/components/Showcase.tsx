import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { Header } from "./Header";
import { DownloadButtons } from "../shared/DownloadButtons";

export function ShowCase() {
  return (
    <Box
      bgImage={"src/assets/png/bg.png"}
      h={"58.2rem"}
      bgSize={"cover"}
      bgPosition={"center"}
      bgAttachment={"scroll"}
      bgRepeat="no-repeat"
    >
      <Header />
      <VStack spacing={"5.5rem"} pt={"5.5rem"}>
        <Text
          align={"center"}
          color={"#FFFFFF"}
          fontWeight={600}
          fontSize={"60px"}
          lineHeight={"69.2px"}
          textAlign={"center"}
          width={"60%"}
          justifyContent={"center"}
        >
          Zine - The only Financial App you will ever need
        </Text>
        {/* DOWNLOAD BUTTONS */}
        <DownloadButtons />

        {/* PHONE IMAGE */}

        <Image src="src/assets/png/phone.png" alt="Yewande" boxSize="400px" />
      </VStack>
    </Box>
  );
}
