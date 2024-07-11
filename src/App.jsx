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
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        ></Route>
        <Route path="/mailboxes" element={<MailboxList />}></Route>
        <Route path="/new-mailbox" element={<MailboxForm />}></Route>
      </Routes>
    </>
  );
};

export default App;
