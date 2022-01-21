// atividade de map

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuarios = new Map()

usuarios.set('Bruno', 'Admin');
usuarios.set('Giovanna', 'Admin');
usuarios.set('Wellington', 'User');

console.log(getAdmins(usuarios));
