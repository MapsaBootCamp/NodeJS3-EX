const { users, products, comments } = require("../data");
const { v4: uuidv4 } = require("uuid");

const commentList = (req, res) => {
  return res.json(comments);
};

const createComment = (req, res) => {
  // TODO: validation
  const { userId, productId, message, rate } = req.body;

  const user = users.find((user) => user.id === +userId);
  if (!user) {
    //TODO: error handler doros hesabi mikham
    return res.send("chenin useri nadarim");
  }
  const product = products.find((product) => product.id === +productId);
  if (!product) {
    //TODO: error handler doros hesabi mikham
    return res.send("chenin producti nadarim");
  }
  const comment = {
    id: uuidv4(),
    message,
    rate,
    userId,
    productId,
    createdAt: Date.now(),
  };
  comments.push(comment);
  return res.status(201).json(comment);
};

module.exports = {
  createComment,
  commentList,
};
