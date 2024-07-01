import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Spinner,
} from "@chakra-ui/react";
import UserListItem from "../userAvatar/UserListItem";
import ChatLoading from "../shimmerUI/ChatLoading";
import SearchBar from "../input/SearchBar";

const SearchDrawer = ({
  isOpen,
  onClose,
  search,
  setSearch,
  handleSearch,
  searchResult,
  loading,
  accessChat,
  loadingChat,
}) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
        <DrawerBody>
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          {loading ? (
            <ChatLoading />
          ) : (
            searchResult?.map((user) => (
              <UserListItem
                key={user._id}
                user={user}
                handleFunction={() => accessChat(user._id)}
              />
            ))
          )}
          {loadingChat && <Spinner ml="auto" display="flex" />}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SearchDrawer;
