import { Box, Center, Image, VStack, Text } from "@chakra-ui/react";
import { DownloadButtons } from "../shared/DownloadButtons";

export function DownloadSection() {
  return (
    <Box px={20} py={20}>
      <Center>
        <Box
          py={10}
          px={"12%"}
          display={"flex"}
          flexDirection={"row"}
          m={"auto"}
          width={"100%"}
          borderRadius={"16px"}
          bg={"#F5F1FE"}
          alignItems={"center"}
        >
          <Image src="src/assets/svg/quick.svg" width={"318px"} mr={20}></Image>
          <VStack alignItems={"flex-start"}>
            <Text
              lineHeight={"38px"}
              fontSize={"32px"}
              fontWeight={"600"}
              color={"#360995"}
              mb={5}
            >
              Download the Zine app today!
            </Text>
            <DownloadButtons />
          </VStack>
        </Box>
      </Center>
    </Box>
  );
}
