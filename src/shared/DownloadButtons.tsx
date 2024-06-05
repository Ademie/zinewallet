import { HStack, Link, Button, Image } from "@chakra-ui/react";


export function DownloadButtons() {
  return (
    <HStack>
      <Link href="https://play.google.com/store" isExternal>
        <Button
          as="div"
          bg="black"
          _hover={{ bg: "gray.700" }}
          borderRadius="md"
          p={0}
        >
          <Image src="src/assets/svg/google.svg" alt="Download on App Store" />
        </Button>
      </Link>
      <Link href="https://apps.apple.com" isExternal>
        <Button
          as="div"
          bg="black"
          _hover={{ bg: "gray.700" }}
          borderRadius="md"
          p={0}
        >
          <Image src="src/assets/svg/apple.svg" alt="Download on App Store" />
        </Button>
      </Link>
    </HStack>
  );
}
