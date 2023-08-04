import "./App.css";
import { Banner } from "./Components/Banner";
import { Connect } from "./Components/Connect";
import { Counting } from "./Components/Counting";
import { Navbar } from "./Components/Navbar";
import { Works } from "./Components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Connect />
      <Works />
      <Counting />
    </>
  );
}

export default App;
