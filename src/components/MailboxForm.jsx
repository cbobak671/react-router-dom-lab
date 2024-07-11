import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    boxHolder: "",
    boxSize: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formData);
    setFormData({
      boxHolder: "",
      boxSize: "",
    });
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h1>Add Mailbox</h1>
      </section>
      <label htmlFor="boxholder">Boxholder: </label>
      <input type="text" id="boxholder" value={formData.boxholder} />
      <br />
      <label htmlFor="boxsize">Box Size: </label>
      <select name="boxSize" id="boxSize" value={formData.boxSize}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;
