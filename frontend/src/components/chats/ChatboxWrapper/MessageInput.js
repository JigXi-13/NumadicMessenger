import React from "react";
import { FormControl, Input } from "@chakra-ui/react";

const MessageInput = ({
  sendMessage,
  newMessage,
  setNewMessage,
  typingHandler,
}) => {
  return (
    <FormControl onKeyDown={sendMessage} id="first-name" isRequired mt={3}>
      <Input
        variant="filled"
        placeholder="Enter a message.."
        value={newMessage}
        onChange={typingHandler}
      />
    </FormControl>
  );
};

export default MessageInput;
