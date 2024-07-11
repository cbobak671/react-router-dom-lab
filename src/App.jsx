import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";

const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  return (
    <>
    <NavBar />
      <h1>Post Office</h1>
    </>
  );
};

export default App;
