import {
  Box,
  Button,
  HStack,
  Text,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { Header } from "./Header";

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
        <HStack>
          <Link href="https://play.google.com/store" isExternal>
            <Button
              as="div"
              bg="black"
              _hover={{ bg: "gray.700" }}
              borderRadius="md"
              p={0}
            >
              <Image
                src="src/assets/svg/google.svg"
                alt="Download on App Store"
              />
            </Button>
          </Link>
          <Link href="https://apps.apple.com" isExternal>
            <Button
              as="div"
              bg="black"
              _hover={{ bg: "gray.700" }}
              borderRadius="md"
              p={0}
            >
              <Image
                src="src/assets/svg/apple.svg"
                alt="Download on App Store"
              />
            </Button>
          </Link>
        </HStack>

        {/* PHONE IMAGE */}

        <Image src="src/assets/png/phone.png" alt="Yewande" boxSize="400px" />
      </VStack>
    </Box>
  );
}
