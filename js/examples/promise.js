function funcA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Func A`);
            reject('A done');
        }, 2000);
    });
}

function funcB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Func B`);
            resolve('B done');
        }, 2000);
    });
}

function main() {
    funcA()
        .then(res => {
            console.log('tetss============', res);
            // console.log(res);
            // funcB().catch(errB => {
            //     console.log(errB);
            // });
        })
        .catch(err => {
            console.log('errr =============', err);
        });
    // funcA();
    // funcB();
}

main();