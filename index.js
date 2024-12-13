const contacts = [
  {
    name: "Muhammad Haidar Hanif",
    email: "haidar@bearmentor.com",
    phone: "0881-8881-8881",
    company: "Bearmentor Group",
  },
  {
    name: "Isyana Sarasvati",
    email: "Isyana@gmail.com",
    phone: "0882-8882-8882",
    company: "Redrose Recording",
  },
  {
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
    const outputContact = `ID : ${index + 1} ${tempContact.name} (${
      tempContact.phone
    }) ${tempContact.email} ${tempContact.company}`;
    console.log(outputContact);
  }
}

function testAddContact() {
  const testContact = {
    name: "Cristiano Ronaldo",
    email: "Cristianoronaldo@gmail.com",
    phone: "0877-7654-3210",
    company: "Al Nassr Company",
  };
  contacts.push(testContact);
}

function testDeleteContact() {
  const testDeleteContact = {
    name: "Raul Gonzales",
    email: "gonzalesraul@gmail.com",
    phone: "0877-7772-7771",
    company: "Real Madrid Company",
  };
  contacts.pop(contacts);
}

function showMenu() {
  let choice = prompt(
    "1. Test Show Contact\n" +
      "2. Test Add Contact\n" +
      " 3. Test Delete Contact"
  );

  switch (choice) {
    case "1":
      showContacts();
      break;
    case "2":
      testAddContact();
      showContacts();
      break;
    case "3":
      testDeleteContact();
      showContacts();
  }
}

showMenu();
