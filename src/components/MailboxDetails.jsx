import React from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find((mailbox) => mailbox._id === mailboxId);
  if (!selectedBox) {
    return <div>Mailbox does not exist!</div>;
  }

  return (
    <div>
      <h1>{selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.boxHolder}</p>
      <p>Box size: {selectedBox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
