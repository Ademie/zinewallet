import { Box, Flex, VStack, Image, Text, HStack } from "@chakra-ui/react";

export function FeaturesSection() {
  return (
    <Box bg="#f41fe" px={"8rem"} py={"4rem"}>
      <HStack spacing={35}>
        {/* LEFT */}
        <Flex>
          <Box
            mt={35}
            w={600}
            h={750}
            borderRadius={10}
            p={10}
            bgImage={"src/assets/png/mini-bg.png"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          >
            <VStack alignItems={"flex-start"}>
              <Image
                src="src/assets/svg/phone2.svg"
                ml={"30px"}
                mb={"1.5rem"}
              ></Image>
              <Text
                lineHeight={"48px"}
                fontWeight={700}
                fontSize={"24px"}
                mb={"5px"}
                color={"white"}
              >
                User friendly Application
              </Text>
              <Text lineHeight={"28px"} fontSize={"20px"} color={"white"}>
                Experience the power of Zine user-friendly mobile application,
                designed to elevate your cryptocurrency trading journey. Zine
                wallet ensures a seamless experience, enabling you to
                effortlessly buy, sell and hold your favorite cryptocurrencies
                right at your fingertips.
              </Text>
            </VStack>
          </Box>
        </Flex>
        {/* RIGHT */}
        <VStack>
          {/* top */}
          <Box
            mt={35}
            w={600}
            h={400}
            borderRadius={10}
            p={10}
            bgImage={"src/assets/png/mini-bg2.png"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          >
            <VStack alignItems={"flex-start"}>
              <Text
                lineHeight={"48px"}
                fontWeight={700}
                fontSize={"24px"}
                mb={"5px"}
                color={"white"}
              >
                Trade Cryptocurrencies
              </Text>
              <Text
                lineHeight={"22px"}
                fontSize={"16px"}
                color={"white"}
                fontWeight={400}
              >
                Expand your portfolio beyond the well-known Bitcoin and
                Ethereum, as we offer access to a wide array of
                cryptocurrencies.
              </Text>
              <Image
                src="src/assets/png/bitcoin.png"
                ml={"30px"}
                mb={"1.5rem"}
              ></Image>
            </VStack>
          </Box>

          {/* bottom */}
          <Box
            mt={35}
            w={600}
            h={300}
            borderRadius={10}
            p={10}
            bgImage={"src/assets/png/mini-bg3.png"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
          >
            <HStack alignItems={"flex-start"}>
              <VStack alignItems={"flex-start"}>
                <Text
                  lineHeight={"40px"}
                  fontWeight={600}
                  fontSize={"24px"}
                  color={"white"}
                >
                  Sell your Crypto and Get Naira in Seconds
                </Text>
                <Text
                  fontSize={"15px"}
                  color={"white"}
                  w={"80%"}
                //   fontWeight={400}
                >
                  Convert your crypto holdings into naira or other assets
                  easily. Sell your crypto assets and get your fiat equivalence
                  in your wallet immediately
                </Text>
              </VStack>
              <Image
                src="src/assets/svg/coin.svg"
                ml={"30px"}
                mb={"1.5rem"}
              ></Image>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
}
