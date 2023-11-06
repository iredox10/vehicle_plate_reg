import React, { useState } from "react";
import UseFetch from "../hooks/UseFetch";
import path from "../utils/path";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import FormInput from "../components/FormInput";
import FormBtn from "../components/FormBtn";

const Issuer = () => {
  const { id } = useParams();
  const {
    data: issuer,
    error,
    loading,
  } = UseFetch(`${path}/issuer/get-issuer/${id}`);
  const {
    data: vehicles,
    error: err,
    loading: pending,
  } = UseFetch(`${path}/issuer/vehicles/`);
  console.log(vehicles)
  const [showModel, setShowModel] = useState(false);
  const [plateNumber, setPlateNumber] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  

  const handleShowModel = (id) => {
    setVehicleId(id);
    if(vehicleId){
      setShowModel(true);
    }
  }

  const handleAssign = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.patch(`${path}/issuer/assign-plate/${vehicleId}/${id}`,{plateNumber});
      console.log(res.data);
      setShowModel(!showModel)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      <div>
        {issuer && (
          <div>
            <p className="text-white my-2">
              <span className="font-bold">full Name: </span>
              {issuer.fullName}
            </p>
            <p className="text-white my-2">
              <span className="font-bold">email: </span>
              {issuer.email}
            </p>
          </div>
        )}
      </div>
      <table className="">
        <tr className="flex justify-between items-center">
          <th>vehicle owner</th>
          <th>vehicle name</th>
          <th>driver license</th>
          <th>plate number</th>
        </tr>
        {vehicles &&
          vehicles.map((vehicle) => (
            <tr key={vehicle._id} className="flex justify-between items-center">
              <td>{vehicle.vcOwner}</td>
              <td>{vehicle.vcType}</td>
              <td>{vehicle.driverLicense}</td>
              <td>
                {vehicle.plateNumber ? vehicle.plateNumber : "not assigned"}
              </td>
              <td>
                {!vehicle.plateNumber ? (
                  <button
                    onClick={() => handleShowModel(vehicle._id)}
                    className="bg-white p-2 "
                  >
                    assign number
                  </button>
                ) : (
                  <button className="bg-white opacity-60 p-2 " disabled>
                    assigned
                  </button>
                )}
              </td>
            </tr>
          ))}
      </table>
      {showModel && (
        <div className="p-2 fixed top-1/4 left-2/4 w-1/4 h-1/3 bg-green-300 bg-opacity-50">
          <button onClick={() =>setShowModel(!showModel)}>close</button>
          <form onSubmit={handleAssign}>
            <FormInput
              type="text"
              labelFor="plate number"
              lableName="plate number"
              onchange={(e) => setPlateNumber(e.target.value)}
            />
            <FormBtn text="assign" />
          </form>
        </div>
      )}
    </div>
  );
};

export default Issuer;
