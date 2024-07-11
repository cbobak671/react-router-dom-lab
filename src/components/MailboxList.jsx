import React from "react";
import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      {mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
          {mailbox._id}
        </Link>
      ))}
      <h1>Mailboxes</h1>
    </>
  );
};

export default MailboxList;
