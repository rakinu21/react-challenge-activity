import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export const AddItem = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <Link
        to="/createItem"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        <FaPlus /> Add Item
      </Link>
    </div>
  );
};
