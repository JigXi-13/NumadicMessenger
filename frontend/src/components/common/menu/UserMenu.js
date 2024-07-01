import React from "react";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import ProfileModal from "../modal/ProfileModal";

const UserMenu = ({ user, logoutHandler }) => {
  return (
    <Menu>
      <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
        <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
      </MenuButton>
      <MenuList>
        <ProfileModal user={user}>
          <MenuItem>My Profile</MenuItem>
        </ProfileModal>
        <MenuDivider />
        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
