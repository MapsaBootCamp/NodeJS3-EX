const users = [
    {
        id: 1,
        userName: 'Gholam',
        password: '1234',
        phoneNumber: '1234',
        isAdmin: true,
    },
    {
        id: 2,
        userName: 'Mammad',
        password: '1234',
        phoneNumber: '4567',
        isAdmin: false,
    },
    {
        id: 3,
        userName: 'Akram',
        password: '8765',
        phoneNumber: '8765',
        isAdmin: false,
    },
    {
        id: 4,
        userName: 'Heshmat',
        password: '9876',
        phoneNumber: '1234',
        isAdmin: false,
    },
];

const products = [
    {
        id: 1,
        name: 'CharkhKhayati',
        slug: 'چرخ-خیاطی',
        price: 20_000_000,
        qty: 2,
    },
    {
        id: 2,
        name: 'tv',
        slug: 'تلویزیون-۲۱-اینچ-خوشگل',
        price: 40_000_000,
        qty: 4,
    },
];

const comments = [];
const todos = [
    {
        title: '',
        description: '',
        dueDate: '',
        status: 'pending',
        userId: '',
    },
];

module.exports = {
    users,
    products,
    comments,
    todos,
};
