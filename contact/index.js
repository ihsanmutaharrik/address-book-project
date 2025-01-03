console.log("Contact Details");

const urlParams = new URLSearchParams(location.search);
const id = Number(urlParams.get("id"));

const contact = getContactById(dataContacts, id);

const editFormElement = document.getElementById("edit-form");

const fullNameInputElement = document.getElementById("full-name");

fullNameInputElement.value = contact.fullName;

editFormElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const editFormData = new FormData(editFormElement);

  const updatedContact = {
    ...contact,
    fullName: editFormData.get("full-name"),
  };

  updateContact(dataContacts, updatedContact);

  // location.href = "/";
});
