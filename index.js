const contacts = [
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

// Create function task day 11
function showContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const tempContact = contacts[index];
    const outputContact = `${tempContact.name} (${tempContact.phone}) ${tempContact.email} ${tempContact.company}`;
    console.log(outputContact);
  }
}

showContacts();
