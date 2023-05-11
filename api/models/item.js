import mongoose from "mongoose";

//creates a schema and defines the accepted data
const ItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "List title is required",
    },
    description: {
      type: String,
      required: "Description is required",
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
    lastModifiedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    /* allows excluding paths from versioning 
    (i.e., the internal revision will not be incremented even 
    if these paths are updated) */
    skipVersioning: true,
    timestamps: {
      createdAt: "createdDate",
      updatedAt: "lastModifiedDate",
    },
  }
);

//adds a virtual property in the document and maps the _id value to it
ItemSchema.virtual("id", () => this._id.toHexString());

//sets the format to json for the virtuals
ItemSchema.set("toJSON", { virtuals: true });

//creates a model with the specified collection name and schema.
const model = mongoose.model("listitems", ItemSchema);

export default model;
