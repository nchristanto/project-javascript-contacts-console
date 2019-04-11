// Object Data
const myContacts = [
  {
    id: 1,
    name: 'Raisa',
    age: 28,
    phone: '+1 111 101010',
    email: 'raisa@saraswati.com',
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
    tags: ['creative']
  },
  {
    id: 3,
    name: 'Joe Smith',
    age: 50,
    phone: '+63 813 363636',
    email: 'joe@smith.dev',
    organization: 'Smith Corporation.',
    tags: ['smart']
  }
]

// -----------------------------------------------------------------------------

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

// Filter contact based on organization name
const filterContacts = (contacts, organization) => {
  let newContacts = []

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index]

    if (contact.organization === organization) {
      newContacts.push(contact)
    }
  }

  return newContacts
}

// Add data into object
const addCountryAsIndonesia = () => {
  for (let index = 0; index < myContacts.length; index++) {
    myContacts[index].country = 'Indonesia'
  }
}

// -----------------------------------------------------------------------------

// Call contact
showContacts(myContacts)
console.log('')

// Show Filter Contacts
const filteredContacts = filterContacts(myContacts, 'Impact Byte')
showContacts(filteredContacts)
console.log('')

addCountryAsIndonesia()

console.log(myContacts)
console.log('')
