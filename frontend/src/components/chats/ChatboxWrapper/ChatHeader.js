import React from "react";
import { Text, IconButton } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getSender, getSenderFull } from "../../../utils/ChatUtils";
import ProfileModal from "../../common/modal/ProfileModal";
import UpdateGroupChatModal from "../../common/modal/UpdateGroupChatModal";

const ChatHeader = ({
  user,
  selectedChat,
  setSelectedChat,
  activeUsers,
  fetchMessages,
  fetchAgain,
  setFetchAgain,
}) => {
  return (
    <Text
      fontSize={{ base: "28px", md: "30px" }}
      pb={3}
      px={2}
      w="100%"
      display="flex"
      justifyContent={{ base: "space-between" }}
      alignItems="center"
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        icon={<ArrowBackIcon />}
        onClick={() => setSelectedChat("")}
      />
      {!selectedChat.isGroupChat ? (
        <>
          {getSender(user, selectedChat.users)}
          <ProfileModal
            activeUsers={activeUsers}
            loggedInUser={user}
            user={getSenderFull(user, selectedChat.users)}
          />
        </>
      ) : (
        <>
          {selectedChat.chatName.toUpperCase()}
          <UpdateGroupChatModal
            fetchMessages={fetchMessages}
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          />
        </>
      )}
    </Text>
  );
};

export default ChatHeader;
