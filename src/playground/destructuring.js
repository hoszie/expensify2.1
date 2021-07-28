// const person = {
//   name: 'Nick',
//   age: 34,
//   location: {
//     city: 'Vancouver',
//     temperature: 15
//   }
// };

// const {name = "Anonymous", age, location} = person
// const {city, temperature: temp} = person.location

// console.log(`${name} is ${age} from ${city}. It's ${temp}`)


// const book = {
//   title: 'The Second World War',
//   author: 'Anthony Beevor',
//   publisher: {
//     name: 'Dickhead',
//   }
// }

// const { name: publisherName = 'Self-pub' } = book.publisher

// console.log(publisherName)

const address = ['5323 NE Garfield Ave', 'Portland', 'Oregon', '97211'];

const [street, city, state, zip] = address

console.log(`You are in ${city}, ${state}`)


const item = ['coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [ itemName, , mediumPrice ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice} `)