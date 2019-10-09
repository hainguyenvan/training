// console.log('Hello World');


// $("body").click(function (event) {
//     $("#btn_get_users").html("clicked: " + event.target.nodeName);
// });

// $("#btn_get_users").click(function () {
//     alert("button click");
// });

function getAllUser() {
    return new Promise((resolve, reject) => {
        try {
            console.log('request:..');
            const xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/users', false); // false for synchronous request
            xmlHttp.send(null);

            resolve(JSON.parse(xmlHttp.responseText));
        } catch (err) {
            reject(err);
        }
    })
}

function main() {
    console.log('Hello World');
    getAllUser()
        .then(res => {
            console.log('res:', res);
        })
        .catch(err => {
            console.log('err', err);
        })
}
// main();