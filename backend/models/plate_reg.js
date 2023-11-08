import mongoose from "mongoose";

const plate = new mongoose.Schema(
  {
    ownerEmail: {
      type: String,
      required: true,
    },
    vehicleName: {
      type: String,
      required: true,
    },
    plateNumber: {
      type: String,
    }
    // plateType: String,
  },
  { timestamps: true }
);

const Plate = mongoose.model("Plate", plate);
export default Plate;
