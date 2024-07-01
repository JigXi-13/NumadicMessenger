import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/toast";

import { useNavigate } from "react-router-dom";
import { ChatState } from "../Context/ChatProvider";
import SearchDrawer from "./common/drawer/SearchDrawer";
import UserMenu from "./common/menu/UserMenu";

function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { setSelectedChat, user, chats, setChats } = ChatState();

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="4px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button onClick={onOpen}>
            <SearchIcon fontSize="2xl" m={1} />
            <Text display={{ base: "none", md: "flex" }} px={4} fontSize={18}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text display={{ base: "none", md: "flex" }} fontSize="28">
          Numadic Messenger
        </Text>
        <UserMenu user={user} logoutHandler={logoutHandler} />
      </Box>

      <SearchDrawer
        isOpen={isOpen}
        onClose={onClose}
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        searchResult={searchResult}
        loading={loading}
        accessChat={accessChat}
        loadingChat={loadingChat}
      />
    </>
  );
}

export default SideDrawer;
