const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//# VERSIONE 1
// const reversedTeachers = teachers.reverse();
// console.log(reversedTeachers);

//# VERSIONE 2 - FOR

const reversed = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  const valueIndex = teachers[i];

  reversed.push(valueIndex);
}

console.log(reversed);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = teachers.filter((teachers) => teachers.length >= 5);
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(5, 1);
console.log(teachers);
