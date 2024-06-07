import { Box, Text, VStack, Image } from "@chakra-ui/react";

import { DownloadButtons } from "../shared/DownloadButtons";

export function ShowCase() {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
      <Box
        bgImage={"src/assets/png/bg.png"}
        h={"57.3rem"}
        bgSize={"cover"}
        bgPosition={"center"}
        bgAttachment={"scroll"}
        bgRepeat="no-repeat"
      >
        <VStack spacing={"5.5rem"} pt={"10.2rem"}>
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
    </div>
  );
}
