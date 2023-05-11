import Item from "../models/item.js";

/**
 * @param {*} newItem
 * @returns {Promise<Item>}
 */

//invoked for adding a new item to the list
export const addItem = (newItem) => {
  const item = new Item(newItem);
  return item.save();
};

//invoked for fetching items by params
export const searchItems = (searchParams) => {
  const params = { ...searchParams };
  return Item.find(params).exec();
};

//invoked for fetching item by id
export const findById = (id) => {
  return Item.findById(id).exec();
};

//invoked for updating item by id
export const updateItem = (newItem) => {
  return Item.findByIdAndUpdate(newItem.id, newItem, { new: true }).exec();
};

//invoked for deleting an item by id
export const deleteItem = (id) => {
  return Item.findByIdAndDelete(id).exec();
};

export const deleteAllItems = () => {
  return Item.deleteMany().exec();
};
