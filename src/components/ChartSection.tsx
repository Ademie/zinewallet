import { Box, Text, Flex, HStack, Center } from "@chakra-ui/react";
import TradingViewWidget from "./TradeChart";

import CryptoPriceTable from "./ChartTable";

export function ChartSection() {
  return (
    <Box bg={"#fcfaff"} py={"8rem"}>
      {/* LEFT */}
      <Center m={"auto"}>
        <HStack spacing={"5rem"}>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <Text
              fontSize={"45px"}
              fontWeight={510}
              lineHeight={"71px"}
              width={"342px"}
              overflowWrap={"break-word"}
              paddingInline={"0px"}
              mb={30}
            >
              Today’s Cryptocurrency Prices
            </Text>
            <TradingViewWidget />
          </Flex>
          {/* RIGHT */}
          <Flex>
            <CryptoPriceTable />
          </Flex>
        </HStack>
      </Center>
    </Box>
  );
}
