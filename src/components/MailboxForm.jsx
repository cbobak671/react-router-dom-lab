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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <h1>Add Mailbox</h1>
      </section>
      <label htmlFor="boxHolder">Enter a Boxholder: </label>
      <input
        type="text"
        name="boxHolder"
        id="boxHolder"
        value={formData.boxHolder}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="boxSize">Select a Box Size: </label>
      <select
        name="boxSize"
        id="boxSize"
        value={formData.boxSize}
        onChange={handleChange}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;
