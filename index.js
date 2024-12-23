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

const contactsListElement = document.getElementById("contacts-list");

function renderContacts(contacts) {
  const contactsString = contacts
    .map((contact) => {
      return `<li>
      <div class="p-5 border-2 rounded">
        <h1>${contact.name}</h1>
        <p>${contact.email}</p>
        <p>${contact.phone}</p>
        <p>${contact.company}</p>
      </div>
    </li>
    `;
    })
    .join("");

  contactsListElement.innerHTML = contactsString;
}

renderContacts(dataContacts);
