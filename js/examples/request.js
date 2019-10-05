const fetch = require('node-fetch');

function getAllUser() {
    return new Promise((resolve, reject) => {
        try {
            console.log('send request: ..');
            const url = 'https://jsonplaceholder.typicode.com/users';
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    resolve(json);
                });
        } catch (err) {
            reject(err);
        }
    });
}

function main() {
    console.log('Hello world !');
    // res: response
    // err: error
    getAllUser()
        .then(res => {
            console.log('res: ', res); // res: done
        })
        .catch(err => {
            console.log('err: ', err);
        });
    // getAllUser()
    //     .then(res => {

    //     })
    //     .catch(err => {

    //     })
}

main();