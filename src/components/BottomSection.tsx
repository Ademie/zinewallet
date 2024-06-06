import {
  Box,
  Link,
  HStack,
  Image,
  Text,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";

export function BottomSection() {
  return (
    <Box
      bg={"#4e0cd9"}
      display={"flex"}
      flexDirection={"column"}
      py={"80px"}
      px={"40px"}
      justifyContent={"center"}
      fontSize={"16px"}
      color={"white"}
    >
      <Box px={"3%"}>
        {/* TOP */}
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link _hover={{ textDecoration: "none" }} width={"101.3px"}>
            <Image
              src={"src/assets/svg/logowhite.svg"}
              alt="zine"
              maxW={"100%"}
              height={"auto"}
            />
          </Link>
          <VStack>
            <HStack justifyContent={"center"} alignContent={"center"}>
              <MdLocationOn size={"22px"}/>
              <Text>22 Omotayo Ojo street, off Allen Avenue Ikeja</Text>
            </HStack>

            <Box alignSelf={"flex-end"} mt={5}>
              <HStack spacing={"30px"}>
                <Link>
                  <Image src="src/assets/png/facebook.png"></Image>
                </Link>
                <Link>
                  <Image src="src/assets/png/twitter.png"></Image>
                </Link>
                <Link>
                  <Image src="src/assets/png/instagram.png"></Image>
                </Link>
                <Link>
                  <Image src="src/assets/png/linkedin.png"></Image>
                </Link>
              </HStack>
            </Box>
          </VStack>
        </Box>
        {/* BOTTOM */}
        <Divider my={20}></Divider>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"12px"}>
            Zine Wallet @ 2024. All rights reserved.
          </Text>
          <VStack>
            <HStack alignSelf={"flex-end"}>
              <Link _hover={{ textDecoration: "none" }}>About Us</Link>
              <Link _hover={{ textDecoration: "none" }}>Contact </Link>
            </HStack>
            <Text>A subsidiary of Sofdia Systems</Text>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
