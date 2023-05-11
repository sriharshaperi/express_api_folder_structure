import express from "express";

//imports all exported members
import * as itemController from "../controllers/item-controller.js";

//creates a new Router object
const router = express.Router();

//triggers for specified REST API methods on this route
router
  .route("/items")
  .post(itemController.postData)
  .get(itemController.getData)
  .delete(itemController.deleteAll);

//triggers for specified REST API methods on this route
router
  .route("/items/:id")
  .get(itemController.getDataById)
  .put(itemController.putData)
  .delete(itemController.deleteData);

export default router;
