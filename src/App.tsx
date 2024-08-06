import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { HeaderSearch } from "./component/HeaderSearch";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <>
        <HeaderSearch></HeaderSearch>
        <Navbar></Navbar>
      </>
    </MantineProvider>
  );
}
export default App;
