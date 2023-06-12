
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};


const UserAndJob = {...user, ...jobInfos};

const {name, age, nationality, profession, squad, squadInitials} = UserAndJob;

const frase = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a Software engineer and my squad is ${squadInitials}-${squad}`;

console.log(UserAndJob);
console.log(frase);