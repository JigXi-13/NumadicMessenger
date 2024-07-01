import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/SideDrawer";
import MyChats from "../components/chats/MyChats/MyChats";
import { Box } from "@chakra-ui/layout";
import ChatboxWrapper from "../components/chats/ChatboxWrapper/ChatboxWrapper";

const Chatspage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);

  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="32px"
        columnGap={"32px"}
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatboxWrapper
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          />
        )}
      </Box>
    </div>
  );
};

export default Chatspage;
