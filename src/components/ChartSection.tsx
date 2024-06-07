import { Box, Text, Flex, HStack, Center } from "@chakra-ui/react";
import TradingViewWidget from "./TradeChart";
import "/styles.css";

import CryptoPriceTable from "./ChartTable";

export function ChartSection() {
  return (
    <Box bg={"#fcfaff"} py={"120px"} mt={"52rem"} display={"flex"}>
      {/* LEFT */}
      <Center m={"auto"}>
        <HStack spacing={"5rem"}>
          <Flex flexDirection={"column"} alignItems={"center"} ml={"1.5rem"}>
            <Text
              fontSize={"46px"}
              fontWeight={505}
              lineHeight={"71px"}
              letterSpacing={1.2}
              width={"400px"}
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
