import { Box } from "@chakra-ui/layout";
import "../../../styles/styles.css";
import { ChatState } from "../../../Context/ChatProvider.js";
import Chatbox from "./Chatbox.js";

const ChatboxWrapper = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatboxWrapper;
