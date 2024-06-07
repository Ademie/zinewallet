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
            With Zine Wallet, you can trade a wide range of cryptocurrencies,
            including Bitcoin, Ethereum, and many other altcoins.
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
            Security is our top priority at Zine Wallet. We employ advanced
            encryption and security protocols to ensure the safety of your
            assets and personal information. Additionally, we continuously
            update our security measures to stay ahead of emerging threats.
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
            Yes, Zine Wallet allows you to set up automatic purchases at a time
            determined by you. This feature enables you to invest in stable
            currencies effortlessly, even if you have a busy schedule.
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
            Yes, Zine Wallet enables fast and secure money transfers between
            users with zero transaction fees. Whether you're splitting a bill or
            sending funds to a friend, our platform ensures a seamless and
            hassle-free experience.
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
                How can I get started with Zine wallet?
              </Box>
              <CustomAccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"#5c6f7f"}>
            Getting started with Zine Wallet is easy. Simply download our mobile
            application from the App Store or Google Play Store, create an
            account, and start exploring the world of cryptocurrency trading and
            fast money transfer.
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
                Is customer support availabel on Zine wallet?
              </Box>
              <CustomAccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"#5c6f7f"}>
            Yes, our dedicated customer support team is available to assist you
            with any questions or concerns you may have. You can reach out to us
            through the support page or on the mobile, and we'll be happy to
            help.
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
                How many countries does Zine wallet operate in?
              </Box>
              <CustomAccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color={"#5c6f7f"}>
            Zine Wallet is available to users in Nigeria and Cote D’Ivoire
            allowing individuals from different regions to access our platform
            and take advantage of its features for cryptocurrency trading and
            financial management.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
