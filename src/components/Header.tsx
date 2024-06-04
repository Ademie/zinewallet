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
    <Box p={20}>
      <HStack spacing={"3rem"}>
        <Link _hover={{ textDecoration: "none" }}>
          <HStack>
            <Text fontSize={"26.38px"} fontWeight={"31.25em"}>
              Zine
            </Text>
            <Image src={"src/assets/png/logo.png"} alt="zine" sizes="" />
          </HStack>
        </Link>
        <HStack>
          <Link _hover={{ textDecor: "none" }}>
            <Text fontSize={"16px"} mr={"3rem"}>
              About us
            </Text>
          </Link>
          <Link _hover={{ textDecor: "none" }}>
            <Text fontSize={"16px"}>Contact</Text>
          </Link>
        </HStack>
      </HStack>
      <Box>
        <DropDown
          items={items}
          onChange={(newValue) => setValue(newValue)}
          value={value}
        />
      </Box>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
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
