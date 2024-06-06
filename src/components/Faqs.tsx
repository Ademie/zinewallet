import {
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  useAccordionItemState,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export function Faqs() {
  return (
    <Box bg={"#f9fafb"} p={20} display={"flex"} flexDirection={"row"}>
      {/* LEFT */}
      <Text
        fontWeight={600}
        fontSize={"48px"}
        lineHeight={"64px"}
        width={"332px;"}
      >
        Frequently Asked
        <Text as="span" color={"#4E0DD9"}>
          {" "}
          Questions
        </Text>
      </Text>
      {/* RIGHT - accordions */}
      <CustomAccordion />
    </Box>
  );
}

function CustomAccordionIcon() {
  const { isOpen } = useAccordionItemState();
  return isOpen ? (
    <MinusIcon
      bg={"#9772f8"}
      color={"white"}
      p={"5px"}
      w={6}
      h={6}
      borderRadius={"5px"}
    />
  ) : (
    <AddIcon
      bg={"#9772f8"}
      color={"white"}
      p={"5px"}
      w={6}
      h={6}
      borderRadius={"5px"}
    />
  );
}

function CustomAccordion() {
  return (
    <Box minW={"850px"} maxW={"850px"} ml={20}>
      <Accordion allowToggle>
        <AccordionItem
          border={0}
          mb={"20px"}
          bg={"white"}
          p={"20px"}
          boxShadow={"lg"}
          borderRadius={"16px"}
        >
          <h2>
            <AccordionButton _hover={{ bg: "ffffff" }}>
              <Box flex="1" textAlign="left" fontSize={"20px"}>
                What is Zine Wallet?
              </Box>
              <CustomAccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"#5c6f7f"}>
            Zine Wallet is a user-friendly mobile application that facilitates
            seamless trading of cryptocurrencies, enabling users to buy, sell,
            and hold various digital assets.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={0}
          mb={"20px"}
          bg={"white"}
          p={"20px"}
          boxShadow={"lg"}
          borderRadius={"16px"}
        >
          <h2>
            <AccordionButton _hover={{ bg: "ffffff" }}>
              <Box flex="1" textAlign="left" fontSize={"20px"}>
                What cryptocurrencies can I trade on Zine Wallet?
              </Box>
              <CustomAccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"#5c6f7f"}>
            You can trade a variety of cryptocurrencies on Zine Wallet,
            including Bitcoin, Ethereum, Litecoin, and more.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={0}
          mb={"20px"}
          bg={"white"}
          p={"20px"}
          boxShadow={"lg"}
          borderRadius={"16px"}
        >
          <h2>
            <AccordionButton _hover={{ bg: "ffffff" }}>
              <Box flex="1" textAlign="left" fontSize={"20px"}>
                How secure is Zine Wallet?
              </Box>
              <CustomAccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"#5c6f7f"}>
            Zine Wallet uses advanced security measures, including encryption
            and two-factor authentication, to ensure the safety of your digital
            assets.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={0}
          mb={"20px"}
          bg={"white"}
          p={"20px"}
          boxShadow={"lg"}
          borderRadius={"16px"}
        >
          <h2>
            <AccordionButton _hover={{ bg: "ffffff" }}>
              <Box flex="1" textAlign="left" fontSize={"20px"}>
                Can I set automatic purchases on Zine Wallet?
              </Box>
              <CustomAccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"#5c6f7f"}>
            Yes, Zine Wallet allows you to set up automatic purchases at regular
            intervals.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          border={0}
          mb={"20px"}
          bg={"white"}
          p={"20px"}
          boxShadow={"lg"}
          borderRadius={"16px"}
        >
          <h2>
            <AccordionButton _hover={{ bg: "ffffff" }}>
              <Box flex="1" textAlign="left" fontSize={"20px"}>
                Can I send money to fellow users on Zine Wallet?
              </Box>
              <CustomAccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"#5c6f7f"}>
            Yes, you can easily send money to other Zine Wallet users.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
