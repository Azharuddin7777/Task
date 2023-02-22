import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';
import { contactsData } from '../../data';

const Dashboard = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [filetrs, setFilters] = useState('All');
  const [myArray, setMyArray] = useState(["All","Personal","Business"]);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('employees_data'));
    if (data !== null && Object.keys(data).length !== 0) setContacts(data);
  }, []);


  const handleEdit = id => {
    const [contact] = contacts.filter(contact => contact.id === id);
    setSelectedContact(contact);
    setIsEditing(true);
    setFilters('All')
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [contact] = contacts.filter(contact => contact.id === id);


        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${contact.name} ${contact.phone}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const contactsCopy = contacts.filter(contact => contact.id !== id);
        localStorage.setItem('employees_data', JSON.stringify(contactsCopy));
        setContacts(contactsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setFilters={setFilters}

          />
          <Table
            contacts={contacts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleFilters = "azhar"
          />
        </>
      )}
      {isAdding && (
        <Add
          contacts={contacts}
          setContacts={setContacts}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
        contacts={contacts}
        selectedContact={selectedContact}
          setContacts={setContacts}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
