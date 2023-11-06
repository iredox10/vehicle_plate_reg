import Issuer from "../models/issuer.js";
import Plate from "../models/plate_reg.js";
import User from "../models/user.js";
import Vehicle from "../models/vehicle_reg.js";

export const issue_plate = async (req, res) => {
  const { issuerId } = req.params;
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, {plateNumber:req.body.plateNumber}, {
      new: true,
    }); 
    const plate = await Plate.create({
      ownerEmail: vehicle.vcOwner,
      vehicleName: vehicle.vcType,
      plateNumber: vehicle.plateNumber,
    });
    const issuer = await Issuer.findOne({_id: issuerId})
    issuer.platesIssued.push(plate);
    const user = await User.findOne({ email: plate.ownerEmail });
    await user.plates.push(plate);
    res.json({ issuer,plate,user }).status(201);
  } catch (err) {
    res.json(err);
  }
};

export const get_issuer = async (req, res) => {
  try {
    const issuer = await Issuer.findById(req.params.id);
    res.json(issuer).status(200);
  } catch (error) {
    res.json(error).status(400);
  }
};

export const get_plates_req = async (req, res) => {
  try {
    const plates = await Plate.find();
    res.json(plates).status(200);
  } catch (error) {
    res.json(error).status(400);
  }
};

export const login = async (req, res) => {
  try {
    const issuer = await Issuer.findOne({ email: req.body.email });
    if (!issuer) {
      res.json({ message: "issuer not found" });
      return;
    }
    if (issuer.password !== req.body.password) {
      res.json({ message: "password incorrect" });
      return;
    }
    res.json(issuer);
  } catch (error) {
    res.json(error).status(400);
  }
};

export const vehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles).status(200);
  } catch (err) {
    res.json(err).status(400);
  }
};
