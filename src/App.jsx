import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card1 from "./components/Card1";

function App() {


  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-5">
        Check Tailwind Css work or not
      </h1>
      <div className="flex justify-between">
        <Card1 profilename="Raidka" btnText="click me" />
        <Card1 profilename="Kamli" />
      </div>
    </>
  );
}

export default App;
