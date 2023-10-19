import React, { useState } from "react";
import { Switch, VStack, useColorMode } from "@chakra-ui/react";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onSwitchTheme = () => {
    toggleColorMode();
    localStorage.setItem('mode', colorMode);
   }


  return (
    <VStack>
      <p>Dark theme</p>
      <Switch colorScheme="teal" size="lg" onChange={onSwitchTheme} />
    </VStack>
  );
};

export default ThemeSwitch;
