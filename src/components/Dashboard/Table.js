import React from 'react';

const Table = ({ contacts, handleEdit, handleDelete, handleFilters }) => {

  contacts.forEach((contact, i) => {
    contacts.id = i + 1;
    console.log(handleFilters, "handleFilters")
  });



  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>ContactType</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            
            contacts.map((contact, i) => (
              <tr key={contact.id}>
                <td>{i + 1}</td>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.gender}</td>
                <td>{contact.contactType} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(contact.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Contacts</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
