import { ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

const ProfileModal = ({ activeUsers, loggedInUser, user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isUserActiveColor, setIsUserActiveColor] = useState();
  const [isUserActiveStatus, setIsUserActiveStatus] = useState();

  useEffect(() => {
    if (
      activeUsers?.length > 0 &&
      activeUsers.find((activeUser) => activeUser._id !== loggedInUser._id)
    ) {
      setIsUserActiveColor("green");
      setIsUserActiveStatus("Online");
    } else {
      setIsUserActiveColor("red");
      setIsUserActiveStatus("Offline");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUsers]);

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <span
          style={{ display: "flex", alignItems: "center", columnGap: "8px" }}
        >
          <Text
            display={"flex"}
            fontSize={"18px"}
            fontWeight="bold"
            color={isUserActiveColor}
          >
            {isUserActiveStatus}
          </Text>
          <IconButton
            display={{ base: "flex" }}
            icon={<ViewIcon />}
            onClick={onOpen}
          />
        </span>
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader fontSize="40px" display="flex" justifyContent="center">
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
            />
            <Text display={{ base: "28px", md: "30px" }}>
              Email: {user.email}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModal;
