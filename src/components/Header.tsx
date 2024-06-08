import {
  Box,
  Link,
  HStack,
  Text,
  Image,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import "/styles.css";
import { DropDown, items } from "./Dropdown";

export function Header() {
  const [value, setValue] = useState("");
  const [display, changeDisplay] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        h={["50px", "50px", "80px"]}
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        py={"1.3rem"}
        borderBottom={"1px"}
        borderBottomColor={"#F2F4F724"}
      >
        <Box
          px={["0", "0", "3%"]}
          width={"93%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* LEFT */}
          <Box display={"flex"} alignItems={"center"}>
            <Link _hover={{ textDecoration: "none" }} className="zine-logo">
              <HStack spacing={".5rem"}>
                <Text
                  fontSize={["22px", "22px", "26.38px"]}
                  fontWeight={"bold"}
                >
                  Zine
                </Text>
                <Image
                  src={"src/assets/png/logo.png"}
                  alt="zine"
                  width={"20px"}
                />
              </HStack>
            </Link>

            <HStack
              ml={"3rem"}
              color={"white"}
              spacing={"3rem"}
              display={["none", "none", "flex", "flex"]}
            >
              <Link _hover={{ textDecoration: "none" }} className="nav-link">
                <Text fontSize={"16px"}>About us</Text>
              </Link>
              <Link _hover={{ textDecoration: "none" }} className="nav-link">
                <Text fontSize={"16px"}>Contact</Text>
              </Link>
            </HStack>
          </Box>
          {/* RIGHT */}
          <IconButton
            aria-label={display ? "Close Menu" : "Open Menu"}
            background={"transparent"}
            _hover={{ background: "transparent" }}
            size="lg"
            icon={
              display ? (
                <CloseIcon color={"white"} fontSize={"16px"} />
              ) : (
                <HamburgerIcon color={"white"} fontSize={"25px"} />
              )
            }
            onClick={() => changeDisplay(!display)}
            display={["flex", "flex", "none", "none"]}
          />
          <Box display={["none", "none", "flex", "flex"]} alignItems={"center"}>
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

      {/* Hamburger Menu Popup */}

      <Box
        mt={"50px"}
        position="fixed"
        top={display ? "0" : "-100%"}
        left="0"
        width="100%"
        bg="white"
        display="flex"
        flexDirection="column"
        zIndex="20"
        transition="top 0.3s ease-in-out"
        py={10}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          px={6}
        >
          <Link
            _hover={{ textDecoration: "none" }}
            className="nav-link"
            borderBottom={"1px"}
            borderColor={"#a0aec0"}
            onClick={() => changeDisplay(false)}
            w={"100%"}
          >
            <Text fontSize={"16px"} color={"#a0aec0"} mb={"1rem"}>
              About us
            </Text>
          </Link>
          <Link
            _hover={{ textDecoration: "none" }}
            className="nav-link"
            borderBottom={"1px"}
            borderColor={"#a0aec0"}
            onClick={() => changeDisplay(false)}
            w={"100%"}
          >
            <Text fontSize={"16px"} color={"#a0aec0"} my={"1rem"}>
              Contact
            </Text>
          </Link>
          <Box alignItems={"center"} mt={"20px"}>
            <DropDown
              borderColor="#a0aec0"
              items={items}
              onChange={(newValue) => setValue(newValue)}
              value={value}
            />
            <Button
              mt={"15px"}
              bg={"black"}
              h={"45px"}
              minW={"410px"}
              w={"100%"}
              color={"white"}
              _hover={{ bg: "#333" }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
