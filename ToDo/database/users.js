const { v4: uuidv4 } = require('uuid');

users = [
    {
        id: Math.floor(Math.random() * 10e1),
        nickName: 'Heshmat',
        password: 'LBoaslkfk',
        age: 20,
        isAdmin: true,
    },
    {
        id: Math.floor(Math.random() * 10e1),
        nickName: 'Hasan Saw',
        password: 'pbkawjsX',
        age: 22,
        isAdmin: false,
    },
    {
        id: Math.floor(Math.random() * 10e1),
        nickName: 'Kazem Pool Lazem',
        password: 'xbm30ls@',
        age: 18,
        isAdmin: false,
    },
    {
        id: Math.floor(Math.random() * 10e1),
        nickName: 'Gholam Pashe',
        password: '120bmsjvmw',
        age: 25,
        isAdmin: false,
    },
];

module.exports = users;