const { from } = require('rxjs');
const { map, filter, reduce, mergeMap } = require('rxjs/operators');

let persons = [
    {
        id: 1,
        name: "Jan Kowalski"
    }, 
    {
        id: 2,
        name: "John Doe"
    },
    {
        id: 3,
        name: "Jarek Kaczka"
    }
]

let ages = [
    {
        person: 1,
        age: 18
    },
    {
        person: 2,
        age: 24
    },
    {
        person: 3,
        age: 666
    }
]

let locations = [
    {
        person: 1,
        country: "Poland"
    },
    {
        person: 3,
        country: "Poland"
    },
    {
        person: 1,
        country: "USA"
    }
]

const averageAgePoland$ = from(locations).pipe(
    filter(location => location.country === 'Poland'),
    mergeMap(location => {
        const personId = location.person;
        const ageEntry = ages.find(age => age.person === personId);
        return ageEntry ? [ageEntry.age] : [];
    }),
    reduce((acc, age) => {
        acc.total += age;
        acc.count++;
        return acc;
    }, { total: 0, count: 0 }),
    map(({ total, count }) => (count > 0 ? total / count : 0))
);

averageAgePoland$.subscribe({
    next: average => console.log(`Średnia wieku Polaków: ${average}`),
});