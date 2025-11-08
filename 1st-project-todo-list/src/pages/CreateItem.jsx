import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  {data}from '../server/server.js'
import '../styles/CreateItem.css'

export const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !discription.trim()) {
      return alert("Please fill all fields");
    }

    const newItem = { title, discription };
    // navigate back to DisplayItem with new data

     data.push(newItem);

     console.log(data)
    navigate("/");
  };

  return (
    <div className="create-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="create-form">
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter description"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};
