console.log(`== vs ===`);
let a = 1;
let b = `1`;
let flag = a == b;
let flag1 = a === b;
console.log(`a: ${a}, b: ${b}, a == b: `, flag);
console.log(`a: ${a}, b: ${b}, a === b: `, flag1);

console.log(`let, const, var`);

function testVar(type) {
    switch (type) {
        case '1':
            var res = '1';
            break;
        case '2':
            res = '2';
            break;
        default:
            res = '-1';
    }
    console.log('var: ', res);
}

function testLet(type) {
    switch (type) {
        case '1':
            let res = '1';
            break;
        case '2':
            let res1 = '2';
            break;
        default:
            let res2 = '-1';
    }
    console.log('let: ', res);
}

testVar('1');
// testLet('2');