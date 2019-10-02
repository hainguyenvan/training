let users = [{
        name: 'test1',
        age: 13
    },
    {
        name: 'test2',
        age: 14
    },
    {
        name: 'test3',
        age: 10
    },
    {
        name: 'test4',
        age: 18
    },
    {
        name: 'test5',
        age: 3
    },
    {
        name: 'test6',
        age: 9
    }
];

function sortIncrement(first, last) {
    if (first.age < last.age) {
        return -1;
    }
    if (first.age > last.age) {
        return 1;
    }
    return 0;
}

users.sort(sortIncrement);
console.log(users);

function sortDecrement(arr) {
    let arr = [];
    return arr;
}