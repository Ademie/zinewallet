import {
  Box,
  HStack,
  VStack,
  Text,
  Flex,
  FormControl,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

import "/styles.css";

export function ContactSection() {
  return (
    <Box bg={"#F5F1FE"} px={"5.7rem"} pt={"120px"} pb={"50px"}>
      {/* TOP */}

      <HStack spacing={0} pb={"120px"}>
        {/* left */}
        <Flex flex={1.8}>
          <Box
            borderTopLeftRadius={"20px"}
            borderBottomLeftRadius={"20px"}
            bgImage={"src/assets/png/woman.png"}
            bgSize={"cover"}
            h={"650px"}
            width={"100%"}
          ></Box>
        </Flex>
        {/* right */}
        <Flex flex={2.5}>
          <Box
            bg={"#895eed"}
            borderTopRightRadius={"20px"}
            borderBottomRightRadius={"20px"}
            px={"3rem"}
            py={"5rem"}
            h={"650px"}
          >
            <VStack alignItems={"center"}>
              <Text
                fontSize={"32px"}
                lineHeight={"48px"}
                fontWeight={"bold"}
                color={"white"}
              >
                Promoting Economic Empowerment in Africa Through Crypto
                Adoption.
              </Text>
              <Text
                fontSize={"20px"}
                lineHeight={"28px"}
                color={"white"}
                mt={"1.7rem"}
              >
                At Zine, our mission is to empower individuals and businesses in
                Africa and beyond to embrace the potential of cryptocurrencies
                through a secure, trustworthy, and user-centric platform. By
                building local trust, providing comprehensive education, and
                tailoring our services to meet the unique needs of the African
                market, we aim to simplify cryptocurrency transactions and
                foster widespread adoption.
              </Text>
              <Text
                fontSize={"20px"}
                lineHeight={"28px"}
                color={"white"}
                mt={"1.5rem"}
              >
                Our commitment to user-friendliness, security, and financial
                performance drives us to create innovative solutions that enable
                seamless access, management, and utilization of digital assets,
                ultimately shaping the future of financial inclusion and
                empowerment in the digital age.
              </Text>
            </VStack>
          </Box>
        </Flex>
      </HStack>

      {/* BOTTOM */}
      <Box py={"96px"}>
        <HStack alignItems={"flex-start"}>
          <Flex flex={1}>
            <Text
              color={"#4E0DD9"}
              fontWeight={500}
              fontSize={"48px"}
              lineHeight={"64px"}
              width={"432px;"}
            >
              Get in touch with us!{" "}
              <Text as="span" color="black">
                {" "}
                Talk with a Zine representative
              </Text>
            </Text>
          </Flex>

          {/* RIGHT -FORM */}
          <Flex flex={1}>
            <VStack spacing={4} alignItems={"center"}>
              <FormControl isRequired={true}>
                <Input
                  type="text"
                  focusBorderColor="gray.100"
                  color={"black"}
                  placeholder="First Name"
                  
                />
              </FormControl>

              <FormControl isRequired={true}>
                <Input
                  type="text"
                  focusBorderColor="gray.100"
                  color={"black"}
                  placeholder="Last Name"
                  width={"600px"}
                />
              </FormControl>
              <FormControl isRequired={true}>
                <Input
                  type="number"
                  focusBorderColor="gray.100"
                  color={"black"}
                  placeholder="Phone Number"
                  width={"600px"}
                />
              </FormControl>
              <FormControl isRequired={true}>
                <Input
                  type="email"
                  focusBorderColor="gray.100"
                  color={"black"}
                  placeholder="Email Address"
                  width={"600px"}
                />
              </FormControl>
              <FormControl isRequired={true}>
                <Textarea
                  borderRadius={5}
                  height={200}
                  placeholder="Write Your Message"
                  focusBorderColor="gray.100"
                  color={"black"}
                  size="sm"
                />
              </FormControl>

              <Button
                bgColor={"#6421f2"}
                color={"white"}
                size="lg"
                mt={4}
                width={"699.85px"}
                borderRadius={"10px"}
              >
                <Text fontWeight={100} >Submit</Text>
              </Button>
            </VStack>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
}
