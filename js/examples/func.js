function getUserByID(id) {
    console.log('id: ', id);
    const user = {
        id: id,
    };
    return user;
}

let data = getUserByID('122');
console.log('data: ', data);