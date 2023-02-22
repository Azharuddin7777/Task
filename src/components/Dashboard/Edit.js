import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ contacts, selectedContact, setContacts, setIsEditing }) => {

  const id = selectedContact.id;
  const [name, setName] = useState(selectedContact.name);
  const [phone, setPhone] = useState(selectedContact.phone);
  const [gender, setGender] = useState(selectedContact.gender);
  const [contactType, setContactType] = useState(selectedContact.contactType);

  const handleUpdate = e => {
    e.preventDefault();

    if (!name || !phone || !gender || !contactType) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const contact = {
      id,
      name,
      phone,
      gender,
      contactType,
    };

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        contacts.splice(i, 1, contact);
        break;
      }
    }

    localStorage.setItem('employees_data', JSON.stringify(contacts));
    setContacts(contacts);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${contact.name} ${contact.phone}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
    <form onSubmit={handleUpdate}>
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
          defaultChecked={gender ==="male"}
        />  Male
        <input
          id="gender"
          type="radio"
          name="gender"
          value="female"
          defaultChecked={gender ==="female"}
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
          defaultChecked={contactType ==="Personal"}

        />  Personal 
        <input
          id="contactType"
          type="radio"
          name="contactType"
          value="Business"
          defaultChecked={contactType ==="Business"}
          style={{ marginLeft : '30px' }}
         
        />  Business 
        </div>
      <div style={{ marginTop: '30px' }}>
        <input type="submit" value="Add" />
        <input
          style={{ marginLeft: '12px' }}
          className="muted-button"
          type="button"
          value="Cancel"
          onClick={() => setIsEditing(false)}
        />
      </div>
    </form>
  </div>
  );
};

export default Edit;
