let dataContacts = [
  {
    id: 1,
    name: "Muhammad Haidar Hanif",
    email: "haidar@bearmentor.com",
    phone: "0881-8881-8881",
    company: "Bearmentor Group",
  },
  {
    id: 2,
    name: "Isyana Sarasvati",
    email: "Isyana@gmail.com",
    phone: "0882-8882-8882",
    company: "Redrose Recording",
  },
  {
    id: 3,
    name: "Raul Gonzales",
    email: "gonzalesraul@gmail.com",
    phone: "0877-7772-7771",
    company: "Real Madrid Company",
  },
];

// function renderContacts
function renderContacts(contacts) {
  contacts.forEach((contact, index) => {
    console.log(`
      ID : ${contact.id}
      Name: ${contact.name}
      Email: ${contact.email}
      Phone: ${contact.phone}
      Company: ${contact.company}`);
  });
}

// function searchContacts
function searchContacts(contacts, searchTerm) {
  const searchedContacts = contacts.filter((contact) => {
    return contact.name
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });

  renderContacts(searchedContacts);
}

// function generateId
function generateId(contacts) {
  return contacts[contacts.length - 1].id + 1;
}

// function addContact
function addContact(contacts, newContactInput) {
  const newContact = {
    id: generateId(contacts),
    ...newContactInput,
  };

  const newContacts = [...contacts, newContact];

  renderContacts(newContacts);
}

// function deleteContact
function deleteContact(contacts, contactId) {
  const filteredContacts = contacts.filter((contact) => {
    return contact.id !== contactId;
  });

  dataContacts = filteredContacts;
  renderContacts(dataContacts);
}

// renderContacts(dataContacts);
// searchContacts(dataContacts, "Ha");
// addContact(dataContacts, {
//   name: "Emma Watson",
//   email: "Emma@watson.com",
//   phone: "0871-7711-1111",
//   company: "Hogwarts Group",
// });
// deleteContact(dataContacts, 1);
