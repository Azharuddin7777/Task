import React, {useState} from "react";

const Header = ({ setIsAdding }) => {


  return (
    <header>
      <h3 className="text-center">Survey Heart - Contacts List(Sample Task)</h3>
      <div  style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button className="" onClick={() => setIsAdding(true)} > + Add New Contact</button>
      </div>
    </header>
  );
};

export default Header;
