import React from "react";

const Footer = ({ length }) => {
  return (
    <div className="footer">
      <h3>
        {length} List {length === 1 ? "Item" : "Items"}
      </h3>
    </div>
  );
};

export default Footer;
