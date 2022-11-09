const mongoose = require("mongoose");
const Order = mongoose.model("Order");

exports.get = async (data) => {
  var res = await Order.find({}, "number status user items createDate")
    .populate("user", "name email")
    .populate("items.product", "title quantity");
  return res;
};

exports.create = async (data) => {
  var order = new Order(data);
  await order.save();
};
