import React, {useState} from "react";

const Header = ({ setIsAdding, filterValue }) => {

  const [value, setValue] = useState('All');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value)
  };

  return (
    <header>
      <h1>Contacts List</h1>
      <div  style={{ marginTop: "30px", marginBottom: "18px" }} className="row">
        <button className="col-2" onClick={() => setIsAdding(true)} >Add Contact</button>
        <h1 className="col-8"></h1>
        <select className="col-2" value={value} onChange={handleChange}>
          <option value="All">All</option>
          <option value="Personal Contacts">Personal Contacts</option>
          <option value="Bussiness Contacts">Bussiness Contacts</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
