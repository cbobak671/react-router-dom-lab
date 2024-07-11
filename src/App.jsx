import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    const newMailbox = {
      _id: "Mailbox" + " " + mailboxes.length + 1,
      boxHolder: formData.boxHolder,
      boxSize: formData.boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        ></Route>
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        ></Route>
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        ></Route>
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
