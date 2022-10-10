import React, { useState } from "react";
import Navbar from "../parts/Navbar";
import useToogle from "../customHooks/useToogle";

const Home = () => {
  let [label, setLabel] = useState("OFF");
  let [lampu, setLampu] = useToogle();
  let styled = {
    backgroundColor: lampu ? "yellow" : "black",
    textAlign: "center",
    height: "400px",
  };
  const handleSklar = () => {
    setLampu(!lampu);
    setLabel((e) => {
      if (e == "ON") {
        return "OFF";
      }
      return "ON";
    });
  };
  return (
    <div style={styled}>
      <Navbar />
      <button className="btn btn-primary" onClick={handleSklar}>
        {label}
      </button>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
