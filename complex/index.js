// Object Data
const myContacts = [
  {
    id: 1,
    name: 'Raisa',
    age: 28,
    phone: '+1 111 101010',
    email: 'raisa@.com',
    organization: 'Impact Byte',
    favorite: true,
    rating: 9,
    tags: ['popular', 'pretty']
  },
  {
    id: 2,
    name: 'John Doe',
    age: 35,
    phone: '+62 812 242424',
    email: 'john@doe.com',
    organization: 'Impact Byte',
    tags: 'creative'
  },
  {
    id: 3,
    name: 'Joe Smith',
    age: 50,
    phone: '+63 813 363636',
    email: 'joe@smith.dev',
    organization: 'Smith Corporation.',
    tags: 'smart'
  }
]

// Show contact
const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}> ${
        contact.organization
      }`
    )
  }
}

// Call contact
showContacts(myContacts)
console.log('')

// Filter contact based on organization name
const filterContacts = (myContacts, similarOrganization) => {
  let newContacts = []

  for (let index = 0; index < myContacts.length; index++) {
    const contact = myContacts[index]

    if (contact.organization.length <= similarOrganization) {
      newContacts.push(contact)
    }
  }

  return newContacts
}

// Show Filter Contacts
const filteredContacts = filterContacts(myContacts, 11)

showContacts(filteredContacts)
console.log('')

// Add data into object
const addData = () => {
  for (let index = 0; index < myContacts.length; index++) {
    myContacts[index].country = 'Indonesia'
  }
  console.log(myContacts)
}

addData()
