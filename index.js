// Array Data
const names = ["Raisa", "Budiman", "Denny", "Agus"];

const showNames = names => {
  for (let index = 0; index < names.length; index++) {
    const name = names[index];

    console.log(`[${index + 1}] ${name}`);
  }
};

showNames(names)
console.log("");

// Sort using FOR Loop # 1
const item = ["Raisa", "Budiman", "Denny", "Agus"];

const sortItem = item => {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let newItem = []
  for (let indexi = 0; indexi < alphabet.length; indexi++) {
    for (let indexj = 0; indexj < item.length; indexj++) {
      if (alphabet[indexi] === item[indexj][0]) {
        newItem.push(item[indexj])
      }
    }
  }
  return newItem
}
console.log(sortItem(item))
console.log("");

// Sort string using array.sort # 2
const sortNames = names => {
  return names.sort((item, comparator) => {
    if (item > comparator) return 1;
    else if (item < comparator) return -1;
    return 0;
  });
};
console.log(sortNames(names));
console.log("");

 
// Remove first data in array using shift and alert it 
console.log(names.shift())
console.warn(names)
console.log("")

// Adding data in array using splice 
console.log(names.splice(2, 0, 'Joko'))
console.log(names)
console.log("")

// Delete data in array using slice
console.log(names.slice(1, 3))
console.log("")

// Object Data
const myContacts = [
  {
    id: 1,
    name: "Raisa",
    age: 28,
    phone: "+1 111 101010",
    email: "raisa@.com",
    organization: "Impact Byte",
    favorite: true,
    rating: 9,
    tags: ["popular", "pretty"]
  },
  {
    id: 2,
    name: "John Doe",
    age: 35,
    phone: "+62 812 242424",
    email: "john@doe.com",
    organization: "Impact Byte",
    tags: "creative"
  },
  {
    id: 3,
    name: "Joe Smith",
    age: 50,
    phone: "+63 813 363636",
    email: "joe@smith.dev",
    organization: "Smith Corporation.",
    tags: "smart"
  }
];

// Show contact
const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}> ${
        contact.organization
      }`
    );
  }
};

// Call contact
showContacts(myContacts)
console.log("");

// Filter contact based on organization name
const filterContacts = (myContacts, similarOrganization) => {
  let newContacts = [];

  for (let index = 0; index < myContacts.length; index++) {
    const contact = myContacts[index];

    if (contact.organization.length <= similarOrganization) {
      newContacts.push(contact);
    }
  }

  return newContacts;
};

// Show Filter Contacts
const filteredContacts = filterContacts(myContacts, 11);

showContacts(filteredContacts)
console.log("");

// Add data into object
const addData = () => {
  for (let index = 0; index < myContacts.length; index++) {
    myContacts[index].country = "Indonesia";
  }
  console.log(myContacts);
};

addData();
