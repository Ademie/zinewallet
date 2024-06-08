import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

interface CustomSelect {
  items: {
    value: any;
    label: string;
    imageUrl: string;
  }[];
  value: any;
  borderColor?: string;
  placeholder?: string;
  onChange: (newValue: any) => void;
}

export const items = [
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

export const DropDown = (props: CustomSelect) => {
  const selectedItem =
    props.items.find((x) => x.value === props.value) || props.items[0];

  return (
    <Menu autoSelect={true}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg={"transparent"}
        border={"1px"}
        className="dropdown"
        borderColor={props.borderColor || "white"}
        color={props.borderColor || "white"}
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
