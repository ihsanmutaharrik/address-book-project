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

const contactsListElement = document.getElementById("contact-list");

// Function Render Contacts
function renderContacts(contacts) {
  const contactsLiElements = dataContacts.map((contact) => {
    return `
      <li>
        <div class="border border-2 p-4 rounded-md">
          <h1>${contact.name}</h1>
          <p>email: ${contact.email}</p>
          <p>phone: ${contact.phone}</p>
          <p>contact: ${contact.company}</p>
          <button onclick="deleteContacts(${
            contact.id
          })" class="bg-red-500 py-0.5 px-1 text-xs rounded-md text-white">Delete</button>
        </div>
      </li>
      `;
  });

  contactsListElement.innerHTML = contactsLiElements.join("");
}

// Delete Contacts

function deleteContacts(contactId) {
  const filteredContacts = dataContacts.filter((contact) => {
    return contact.id !== contactId;
  });

  dataContacts = filteredContacts;

  renderContacts(dataContacts);
}

renderContacts(dataContacts);
