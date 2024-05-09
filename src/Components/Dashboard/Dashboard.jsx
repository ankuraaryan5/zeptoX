import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Users from "./Users";

function Dashboard() {
  const [pinCode, setPinCode] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
    localStorage.setItem("pincode", event.target.value);
  };

  const handleSubmit = () => {
    
    const pin = localStorage.getItem("pincode");
    console.log(pin);
    if (userData) {
      if (pin === "") {
        console.log(pin);
        return;
      }
      console.log(userData);
      const uType = userData.userType === "student" ? "teacher" : "student";
      console.log(uType);
      const q = query(
        collection(db, "users"),
        where("userType", "==", uType),
        where("pincode", "==", pin)
      );
      
      getDocs(q).then((data) => {
        const std = data.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        setFilteredStudents(std);
        if (std.length === 0) {
          alert("No user found");
        }
      });
    }
  };
  console.log(filteredStudents);

  return (
    <div className="container container-fluid">
      <input
        type="text"
        placeholder="Enter Pin Code"
        value={pinCode}
        onChange={handlePinCodeChange}
      />
      <button className="btn btn-md btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      {filteredStudents.map((student) => (
        <Users data={student} />
      ))}
    </div>
  );
}

export default Dashboard;
