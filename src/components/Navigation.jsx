import React, { useState } from "react";
import { Box, VStack, Button, Icon, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaClipboardList, FaCoffee, FaUtensils, FaPlus } from 'react-icons/fa';

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={onOpen}>Menu</Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <VStack align="stretch" spacing={4}>
              <Button variant="ghost" leftIcon={<Icon as={FaHome} />} onClick={() => navigate("/")}>Menus</Button>
              <Button variant="ghost" leftIcon={<Icon as={FaClipboardList} />} onClick={() => navigate("/products")}>Products</Button>
              <Button variant="ghost" leftIcon={<Icon as={FaCoffee} />} onClick={() => navigate("/modifiers")}>Modifiers</Button>
              <Button variant="ghost" leftIcon={<Icon as={FaUtensils} />} onClick={() => navigate("/allergens")}>Allergens</Button>
              <Button variant="ghost" leftIcon={<Icon as={FaPlus} />} onClick={() => navigate("/create-allergen")}>Create Allergen</Button>
              <Button variant="ghost" leftIcon={<Icon as={FaPlus} />} onClick={() => navigate("/create-modifier")}>Create Modifier</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navigation;
