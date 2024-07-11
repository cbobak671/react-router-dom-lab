import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId));
if(!selectedBox) {
    return <div>Mailbox does not exist!</div>
}

  return (
    <div>
  <h1>Mailbox Details</h1>
  <p>ID: {selectedBox._id}</p>
  <p>Boxholder: {selectedBox.boxHolder}</p>
  <p>Box size: {selectedBox.boxSize}</p>
  </div>
)};

export default MailboxDetails;
