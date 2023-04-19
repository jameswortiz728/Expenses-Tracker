// const person = {
//     name: 'James',
//     age: 24,
//     location: {
//         city: 'NYC',
//         temp: 54
//     }
// };

// const {name:firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (Iced)', '$3.00', '$3.50', '$3.75'];
const [coffee, , medium] = item;
console.log(`A ${coffee} costs ${medium}`); 