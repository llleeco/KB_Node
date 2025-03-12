const getReservation = require('./reservation');

let people = 6;

const reservate = getReservation(people);
console.log(reservate());
