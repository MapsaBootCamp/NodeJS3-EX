const users = [
    {
        id : 1,
        userName : 'milad',
        password : '1234',
        tasks : [
            {
                taskID : 1,
                title: 'todo',
                description: 'just do it in 7 day',
                due_date: '20',
                status: 'pending',
            },
            {
                taskID : 2,
                title: 'done',
                description: 'just do it in 2 day',
                due_date: '2',
                status: 'in_progress',
            },
            {
                taskID : 3,
                title: 'erm',
                description: 'paint a erm for use in data base later',
                due_date: '3',
                status: 'in_progress',
            }
        ]
    },
    {
        id : 2,
        userName : 'mona',
        password : '1234',
        tasks : [
            {
                taskID : 1,
                title: 'database',
                description: 'just do it in 15 day',
                due_date: '20',
                status: 'pending',
            }
        ]
    }
]

module.exports = {
    users
}