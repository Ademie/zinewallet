import { Box, HStack, Text, Flex, Image } from "@chakra-ui/react";
import TradingViewWidget from "./TradeChart";

export function Investment() {
  return (
    <Box bg="#f41fe" p={"8rem"} px={"5.7rem"}>
      <HStack spacing={35}>
        {/* LEFT */}
        <Flex flex={1.5}>
          <Box
            borderRadius={10}
            border={"1px"}
            bg={"#f4f1fe"}
            p={10}
            h={620}
            borderColor="#E0D4FC"
          >
            <Text
              lineHeight={"48px"}
              fontWeight={550}
              fontSize={"24px"}
              mb={"1rem"}
            >
              Invest in Stable Asset
            </Text>
            <Text fontSize={"21px"} lineHeight={"28px"} color={"#667085"} pr={"7%"} fontWeight={300}>
              In an ever-changing economic environment, Zine wallet becomes your
              safeguard against the uncertainties. Our revolutionary feature
              allows you to invest in solid assets like stable coins, which
              protects the value of your investment over time.
            </Text>
          </Box>
        </Flex>
        {/* RIGHT */}
        <Flex flex={2}>
          <Box
            bg={"#fcf4f3"}
            borderRadius={10}
            p={10}
            h={620}
            border={"1px"}
            borderColor={"#F4D4CD"}
          >
            <Text
              mb={"1.5rem"}
              fontSize={"22px"}
              fontWeight={600}
              lineHeight={"33.6px"}
              width="100%"
            >
              See how your favorite cryptocurrencies have performed overtime.
            </Text>
            <TradingViewWidget />
          </Box>
        </Flex>
      </HStack>
      {/* BOTTOM */}
      <Box
        mt={35}
        bg={"#eff5fa"}
        borderRadius={10}
        p={10}
        h={385}
        border={"1px"}
        borderColor={"#cddfef"}
      >
        <HStack>
          <Flex flex={1}>
            <Box boxSize={"lg"}>
              <Image src={"src/assets/svg/phone.svg"} alt="phone"></Image>
            </Box>
          </Flex>
          <Flex flex={2} flexDirection={"column"} mb={"12rem"} ml={
            "3rem"
          }>
            <Text
              mb={"1.5rem"}
              fontSize={"23px"}
              fontWeight={600}
              lineHeight={"48px"}
              width="auto"
            >
              Set Automatic Purchase At A Time Set By “You”
            </Text>
            <Text fontSize={"20px"} lineHeight={"28px"} color={"#667085"} pr={"5%"}>
              In case you are like me, who forget to eat breakfast sometimes,
              then do not worry about your investment because we have got you
              covered. Your stable coin is automatically purchased at the time
              set by you using our periodic buy feature.
            </Text>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
}
