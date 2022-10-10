import React, { useState } from "react";
import Navbar from "../parts/Navbar";
import { Link } from "react-router-dom";

const Contacts = () => {
  let [data, setSaa] = useState();
  return (
    <>
      <Navbar />
      <h1>Contact</h1>

      <Link to="/" className="btn btn-danger ms-4">
        HomePage
      </Link>
    </>
  );
};

export default Contacts;
