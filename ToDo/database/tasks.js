const users = require('./users.js');

tasks = [
    {
        taskId: 1,
        byUser: users[0].nickName,
        title: 'varzesh',
        description: 'farda beram bashgah jolo bazoo dambel bezanam!',
        'due Date': new Date('2023-12-07'),
        status: 'pending',
    }
];

module.exports = tasks;