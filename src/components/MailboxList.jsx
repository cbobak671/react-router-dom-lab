import React from "react";
import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-list">
      {mailboxes.map((mailbox) => (
        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mailbox-list">
          {mailbox._id}
        </Link>
      ))}
      <h1>Mailboxes</h1>
      </div>
  );
};

export default MailboxList;
