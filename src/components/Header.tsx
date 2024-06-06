import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Link,
  HStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const items = [
  {
    label: " 🇳🇬 Nigeria",
    value: "Nigeria",
  },
  {
    label: " 🇨🇮 Côrte d'Ivoire",
    value: "Côrte d'Ivoire",
  },
];

export function Header() {
  const [value, setValue] = React.useState("");
  return (
    <Box
      px={"5rem"}
      py={"1.3rem"}
      borderBottom={"1px"}
      borderBottomColor={"#F2F4F724"}
    >
      {/* LEFT */}
      <HStack>
        <Flex flex={2}>
          <Link _hover={{ textDecoration: "none" }} color={"white"}>
            <HStack spacing={".5rem"}>
              <Text fontSize={"26.38px"} fontWeight={"31.25em"}>
                Zine
              </Text>
              <Image
                src={"src/assets/png/logo.png"}
                alt="zine"
                width={"20px"}
              />
            </HStack>
          </Link>
          <HStack ml={"3rem"} color={"white"}>
            <Link _hover={{ textDecor: "none" }}>
              <Text fontSize={"16px"} mr={"3rem"}>
                About us
              </Text>
            </Link>
            <Link _hover={{ textDecor: "none" }}>
              <Text fontSize={"16px"}>Contact</Text>
            </Link>
          </HStack>
        </Flex>
        {/* RIGHT */}
        <Flex flex={1}>
          <DropDown
            items={items}
            onChange={(newValue) => setValue(newValue)}
            value={value}
          />
          <Button ml={"3rem"} bg={"black"} color={"white"}>
            Get Started
          </Button>
        </Flex>
      </HStack>
    </Box>
  );
}

interface CustomSelect {
  items: {
    value: any;
    label: string;
  }[];
  value: any;
  placeholder?: string;
  onChange: (newValue: any) => void;
}

const DropDown = (props: CustomSelect) => {
  return (
    <Menu autoSelect={true}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg={"transparent"}
        border={"1px"}
        borderColor={"white"}
        color={"white"}
        _hover={{
          bg: "transparent",
        }}
      >
        {props.items.find((x) => x.value === props.value)?.label ||
          props.items[0].label}
      </MenuButton>
      <MenuList>
        {props.items.map((items, key) => (
          <MenuItem key={key} onClick={() => props.onChange(items.value)}>
            {items.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
