import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ contacts, setContacts, setIsAdding }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [contactType, setContactType] = useState('');

  const handleAdd = e => {
    e.preventDefault();
    if (!name || !phone || !gender || !contactType) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = contacts.length + 1;
    const newContact = {
      id,
      name,
      phone,
      gender,
      contactType,
    };

    contacts.push(newContact);

 

    localStorage.setItem('employees_data', JSON.stringify(contacts));
    setContacts(contacts);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${name} ${phone} data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Contact</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="text"
          name="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
        <div  onChange={e => setGender(e.target.value)}>
        <input
          id="gender"
          type="radio"
          name="gender"
          value="male"
        />  Male
        <input
          id="gender"
          type="radio"
          name="gender"
          value="female"
          style={{ marginLeft : '30px' }}
        />  Female
        </div>
        <label htmlFor="contactType">Contact Type</label>

        <div  onChange={e => setContactType(e.target.value)}>
        <input
          id="contactType"
          type="radio"
          name="contactType"
          value="Personal"
        />  Personal 
        <input
          id="contactType"
          type="radio"
          name="contactType"
          value="Business"
          style={{ marginLeft : '30px' }}
        />  Business 
        </div>
        {/* <label htmlFor="contactType">Contact Type</label>
        <input
          id="contactType"
          type="text"
          name="contactType"
          value={contactType}
          onChange={e => setContactType(e.target.value)}
        /> */}
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
