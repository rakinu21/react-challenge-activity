import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AddItem } from "../components/AddItem";
import { data } from "../server/server.js";
import "../styles/Display.css";

export const DisplayItem = () => {
  const [dataItem, setDataItem] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // ✅ Load data once (from localStorage or server.js)
  useEffect(() => {
    const savedData = localStorage.getItem("items");

    if (savedData) {
       
      setDataItem(data); // use default data from server.js
      localStorage.setItem("items", JSON.stringify(data));
    } 
  }, []);

  // ✅ Keep localStorage in sync whenever items change
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(dataItem));
  }, [dataItem]);


  const handleDelete = (index) => {
    const filtered = dataItem.filter((_, i) => i !== index);
    setDataItem(filtered);
  };

  const handleEdit = (index) => {
    const item = dataItem[index];
    setEditIndex(index);
    setEditTitle(item.title);
    setEditDescription(item.discription);
  };

  const handleSave = (index) => {
    const updated = dataItem.map((item, i) =>
      i === index ? { title: editTitle, discription: editDescription } : item
    );
    setDataItem(updated);
    setEditIndex(null);
    setEditTitle("");
    setEditDescription("");
  };

  return (
    <div className="container">
      <h2 className="header">📋 Item List</h2>

      <AddItem setDataItem={setDataItem} dataItem={dataItem} />

      {dataItem.length > 0 ? (
        dataItem.map((item, index) => (
          <div key={index} className="item-card">
            {editIndex === index ? (
              <div className="edit-section">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <button className="save-btn" onClick={() => handleSave(index)}>
                  Save
                </button>
              </div>
            ) : (
              <>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.discription}</p>
                </div>
                <div className="icons">
                  <FaEdit
                    className="edit-icon"
                    onClick={() => handleEdit(index)}
                  />
                  <FaTrash
                    className="delete-icon"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <p className="empty">No data found</p>
      )}
    </div>
  );
};
