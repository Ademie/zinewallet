import { Box, Flex, VStack, Image, Text, HStack, Card } from "@chakra-ui/react";

export function FeaturesSection() {
  return (
    <Box bg="#f41fe" px={"5.7rem"} py={"4rem"}>
      <HStack>
        {/* LEFT */}
        <Flex flex={1}>
          <Box
            mt={34}
            mr={25}
            h={750}
            borderRadius={10}
            p={10}
            w={"100%"}
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

        <Flex flexDirection={"column"}>
          {/* top */}
          <Box
            mt={35}
            w={580}
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
            w={580}
            h={310}
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
                <Text fontSize={"15px"} color={"white"} w={"90%"}>
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
        </Flex>
      </HStack>

      {/* FEES */}
      <Box
        mt={"8rem"}
        bg={"#eff5fa"}
        borderRadius={10}
        p={6}
        border={"1px"}
        borderColor={"#cddfef"}
      >
        <HStack>
          <Flex flex={1.5}>
            <Image src={"src/assets/png/man.png"} alt="man"></Image>
          </Flex>

          <Flex flex={2.5} flexDirection={"column"} ml={"3rem"}>
            <VStack alignItems={"flex-start"} justifyItems={"center"}>
              <HStack>
                <Image src={"src/assets/png/zeus.png"} alt="zeus"></Image>
                <Card
                  py={"0.5rem"}
                  px={"1.5rem"}
                  color={"white"}
                  bgColor={"#228be1"}
                  borderRadius={"3.7px"}
                >
                  <Text fontWeight={700} fontSize={"26.25px"}>
                    Zero Fees!
                  </Text>
                </Card>
              </HStack>
              <Text
                my={"1.5rem"}
                fontSize={"24px"}
                fontWeight={600}
                lineHeight={"33.6px"}
              >
                Fast and Zero Transaction Fees amongst Zine Users
              </Text>
              <Text fontSize={"21px"} lineHeight={"28px"} color={"#667085"}>
                Tired of transaction fees and network delays? Zine Wallet
                eliminates these headaches by allowing you to send money to
                other zine users swiftly and with zero transaction fees.
              </Text>
            </VStack>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
}
