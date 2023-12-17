const users = [
  {
    userId: 1,
    userName: "mahdi",
    tasks: [
      {
        title: "read book",
        description: "read book today",
        dueDate: Date.now(),
        status: "pending",
      },
      {
        title: "see video",
        description: "see video today",
        dueDate: Date.now(),
        status: "pending",
      },
    ],
  },
];

module.exports = {
  users,
};
