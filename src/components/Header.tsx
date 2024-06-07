import {
  Box,
  Link,
  HStack,
  Text,
  Image,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

import "/styles.css";

export function Header() {
  const [value, setValue] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`sticky-navbar ${scrolled ? "scrolled" : ""}`}>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        py={"1.3rem"}
        borderBottom={"1px"}
        borderBottomColor={"#F2F4F724"}
      >
        <Box
          px={"3%"}
          width={"93%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* LEFT */}
          <Box display={"flex"} alignItems={"center"}>
            <Link _hover={{ textDecoration: "none" }} className="zine-logo">
              <HStack spacing={".5rem"}>
                <Text fontSize={"26.38px"} fontWeight={"bold"}>
                  Zine
                </Text>
                <Image
                  src={"src/assets/png/logo.png"}
                  alt="zine"
                  width={"20px"}
                />
              </HStack>
            </Link>
            <HStack ml={"3rem"} color={"white"} spacing={"3rem"}>
              <Link _hover={{ textDecoration: "none" }} className="nav-link">
                <Text fontSize={"16px"}>About us</Text>
              </Link>
              <Link _hover={{ textDecoration: "none" }} className="nav-link">
                <Text fontSize={"16px"}>Contact</Text>
              </Link>
            </HStack>
          </Box>
          {/* RIGHT */}
          <Box display={"flex"} alignItems={"center"}>
            <DropDown
              items={items}
              onChange={(newValue) => setValue(newValue)}
              value={value}
            />
            <Button ml={"1.5rem"} bg={"black"} color={"white"}>
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

interface CustomSelect {
  items: {
    value: any;
    label: string;
    imageUrl: string;
  }[];
  value: any;
  placeholder?: string;
  onChange: (newValue: any) => void;
}

const items = [
  {
    label: "Nigeria",
    value: "Nigeria",
    imageUrl: "src/assets/png/nigeria.png",
  },
  {
    label: "Côrte d'Ivoire",
    value: "Côrte d'Ivoire",
    imageUrl: "src/assets/png/ivory.png",
  },
];

const DropDown = (props: CustomSelect) => {
  const selectedItem =
    props.items.find((x) => x.value === props.value) || props.items[0];

  return (
    <Menu autoSelect={true}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg={"transparent"}
        border={"1px"}
        borderColor={"white"}
        className="dropdown"
        color={"white"}
        fontWeight={"400"}
        fontSize={"14px"}
        _hover={{
          bg: "transparent",
        }}
        display={"flex"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
          <img
            src={selectedItem.imageUrl}
            alt=""
            style={{ marginRight: "8px", width: "30px", height: "20px" }}
          />
          {selectedItem.label}
        </Flex>
      </MenuButton>
      <MenuList>
        {props.items.map((item, key) => (
          <MenuItem key={key} onClick={() => props.onChange(item.value)}>
            <img
              src={item.imageUrl}
              alt=""
              style={{ marginRight: "8px", width: "20px", height: "15px" }}
            />
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
