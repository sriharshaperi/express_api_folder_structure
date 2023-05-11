//imports all exported members
import * as contactService from "../services/item-service.js";

//invoked when the promise gets resolved
const setSuccessReponse = (object, response) => {
  response.status(200);
  response.json(object);
};

//invoked when the promise gets rejected
const setErrorReponse = (object, response) => {
  response.status(500);
  response.json(object);
};

//triggerrs addItem() service
export const postData = async (request, response) => {
  try {
    const payload = request.body;
    const records = await contactService.searchItems(payload);
    if (records.length > 0)
      setSuccessReponse(
        { message: "Record exists with the given title" },
        response
      );
    else {
      const newitemObject = await contactService.addItem(payload);
      setSuccessReponse(newitemObject, response);
    }
  } catch (error) {
    setErrorReponse(error, response);
  }
};

//triggerrs searchItems() service
export const getData = async (request, response) => {
  try {
    const payload = request.body;
    const fetchedData = await contactService.searchItems(payload);
    if (fetchedData.length > 0) setSuccessReponse(fetchedData, response);
    else setSuccessReponse({ message: "No records found" }, response);
  } catch (error) {
    setErrorReponse(error, response);
  }
};

export const getDataById = async (request, response) => {
  try {
    const id = request.params.id;
    const fetchItemById = await contactService.findById(id);
    if (fetchItemById) setSuccessReponse(fetchItemById, response);
    else setSuccessReponse({ message: "No record found" }, response);
  } catch (error) {
    setErrorReponse(error, response);
  }
};

//triggerrs updateItem() service
export const putData = async (request, response) => {
  try {
    const id = request.params.id;
    const payload = { ...request.body };
    payload.id = id;
    const updatedItem = await contactService.updateItem(payload);
    if (updatedItem) setSuccessReponse(updatedItem, response);
    else setSuccessReponse({ message: "No record found to update" }, response);
  } catch (error) {
    setErrorReponse(error, response);
  }
};

//triggerrs deleteItem() service
export const deleteData = async (request, response) => {
  try {
    const id = request.params.id;
    const deletedItem = await contactService.deleteItem(id);
    if (deletedItem) setSuccessReponse(deletedItem, response);
    else setSuccessReponse({ message: "No record found to delete" }, response);
  } catch (error) {
    setErrorReponse(error, response);
  }
};

//triggerrs deleteItem() service
export const deleteAll = async (request, response) => {
  try {
    const deletedItem = await contactService.deleteAllItems();
    if (deletedItem) setSuccessReponse(deletedItem, response);
    else setSuccessReponse({ message: "No records found to delete" }, response);
  } catch (error) {
    setErrorReponse(error, response);
  }
};
