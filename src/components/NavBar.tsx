import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/StockCake-Stylized Monogram Logo_1721668757.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <div>
      <HStack  padding="10px">
        <Image src={logo} boxSize="60px" borderRadius="50px" />
        <SearchInput  onSearch={onSearch}/>
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
