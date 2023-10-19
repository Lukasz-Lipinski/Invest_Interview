import { useEffect, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { useColorMode } from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const mode = useMemo(
    () => localStorage.getItem('mode') ? localStorage.getItem('mode') : colorMode, [colorMode]
  );

  return (
    <div className={`${mode}-mode`}>
      <Header />
      <List />
    </div>
  );
}

export default App;
