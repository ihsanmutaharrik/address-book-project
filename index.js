let dataContacts = [
  {
    id: 1,
    fullName: "Muhammad Haidar Hanif",
    email: "haidar@bearmentor.com",
    phone: "0881-8881-8881",
    company: "Bearmentor Group",
  },
  {
    id: 2,
    fullName: "Isyana Sarasvati",
    email: "Isyana@gmail.com",
    phone: "0882-8882-8882",
    company: "Redrose Recording",
  },
  {
    id: 3,
    fullName: "Raul Gonzales",
    email: "gonzalesraul@gmail.com",
    phone: "0877-7772-7771",
    company: "Real Madrid Company",
  },
];

const contactsListElement = document.getElementById("contact-list");

const addFormElement = document.getElementById("add-form");

// Function Render Contacts
function renderContacts(contacts) {
  const urlParams = new URLSearchParams(location.search);
  const searchQuery = urlParams.get("q");

  const contactsToDisplay = searchQuery
    ? searchContacts(contacts, searchQuery)
    : contacts;

  const contactsLiElements = contactsToDisplay.map((contact) => {
    return `
      <li>
        <div class="border border-2 p-4 rounded-md">
          <h1>${contact.fullName}</h1>
          <p>email: ${contact.email}</p>
          <p>phone: ${contact.phone}</p>
          <p>company: ${contact.company}</p>
          <button onclick="deleteContacts(${contact.id})" class="bg-red-500 py-1 px-2 text-xs rounded-md text-white hover:bg-red-600 border">Delete</button>
        </div>
      </li>
      `;
  });

  contactsListElement.innerHTML = contactsLiElements.join("");
}

// Function Delete Contacts
function deleteContacts(contactId) {
  const filteredContacts = dataContacts.filter((contact) => {
    return contact.id !== contactId;
  });

  dataContacts = filteredContacts;

  renderContacts(dataContacts);
}

// Function Generate Contact ID
function generateId(contacts) {
  return contacts[contacts.length - 1].id + 1;
}

// Function Search Contact
function searchContacts(contacts, searchQuery) {
  const searchedContacts = contacts.filter((contact) => {
    const isFound =
      contact.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.company.toLowerCase().includes(searchQuery.toLowerCase());

    return isFound;
  });

  if (searchedContacts.length <= 0) {
    console.log("No contacts found");
    return [];
  }

  return searchedContacts;
}

// Function Add Contact
function addContact(contacts, newContactInput) {
  const newContact = {
    id: generateId(contacts),
    fullName: newContactInput.name,
    email: newContactInput.email,
    phone: newContactInput.phone,
    company: newContactInput.company,
  };

  const newContacts = [...contacts, newContact];

  dataContacts = newContacts;

  renderContacts(dataContacts);
}

function getContactById(contacts, contactId) {
  return contacts.find((contact) => {
    return contact.id === contactId;
  });
}

function updateContact(contacts, updatedContact) {
  const updatedContacts = contacts.map((contact) => {
    if (contact.id === updatedContact.id) {
      return updatedContact;
    }

    return contact;
  });

  dataContacts = updatedContacts;
}

// Get Data from Form Contact
addFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const addFormData = new FormData(addFormElement);

  const ContactData = {
    name: addFormData.get("full-name"),
    email: addFormData.get("email"),
    phone: addFormData.get("phone"),
    company: addFormData.get("company"),
  };

  addContact(dataContacts, ContactData);
});

renderContacts(dataContacts);
