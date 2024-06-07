import { Table, Tbody, Tr, Td, Box } from "@chakra-ui/react";

const cryptoData = [
  { name: "Bitcoin", price: 69618.01, change: -0.52 },
  { name: "Ethereum", price: 3802.91, change: -0.6 },
  { name: "BNB", price: 664.7, change: 4.76 },
  { name: "Solana", price: 167.06, change: 1.16 },
  { name: "Tether", price: 1, change: -0.06 },
];

const CryptoPriceTable = () => {
  return (
    <Box bg={"#ffffff"} boxShadow={"md"} p={5}  borderRadius={10} width={550}>
      <Table>
        <Tbody>
          {cryptoData.map((coin) => (
            <Tr key={coin.name} h={75}>
              <Td>{coin.name}</Td>
              <Td isNumeric>
                $
                {coin.price.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </Td>
              <Td isNumeric color={coin.change < 0 ? "red.500" : "green.500"}>
                {coin.change}%
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CryptoPriceTable;
