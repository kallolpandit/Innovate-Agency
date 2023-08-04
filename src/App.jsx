import "./App.css";
import { Banner } from "./Components/Banner";
import { Connect } from "./Components/Connect";
import { Counting } from "./Components/Counting";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Organization } from "./Components/Organization";
import { Project } from "./Components/Project";
import { Works } from "./Components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Connect />
      <Works />
      <Counting />
      <Organization />
      <Project />
      <Footer />
    </>
  );
}

export default App;
