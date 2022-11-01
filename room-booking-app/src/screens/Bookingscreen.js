import React, { useState } from "react";
import axios from "axios";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import moment from "moment";
import Success from "../components/Success";
import SoldOut from "../components/SoldOut";

const { RangePicker } = DatePicker;

function Bookingscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [noOfRooms, setNoOfRooms] = useState("");
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sold, setSold] = useState(false);
  const [count, setCount] = useState(0);

  function filterByDate(dates) {
    setFromDate(moment(dates[0]).format("DD-MM-YYYY"));
    setToDate(moment(dates[1]).format("DD-MM-YYYY"));
  }

  async function booknow() {
    const user = {
      name,
      email,
      phoneNumber,
      noOfRooms,
      fromDate,
      toDate,
    };

    if (count <= 2) {
      try {
        setLoading(true);
        const result = await axios.post("api/users/book", user).data;
        setLoading(false);
        setSuccess(true);

        setName("");
        setEmail("");
        setPhoneNumber("");
        setNoOfRooms("");
        setFromDate("");
        setToDate("");
      } catch (error) {
        console.log(error);
      }
      let newCount = count + 1;
      setCount(newCount);
    } else {
      setSuccess(false);
      setSold(true);
      console.log("sold out");
    }
  }
  return (
    <div>
      {success && <Success message="Room booked" />}
      {sold && <SoldOut message="Room sold Out" />}
      <div className="row mt-5 justify-content-center m-5 ">
        <div className="col md-5 ">
          <div className="bs ">
            <h2>Book Now</h2>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="no of rooms"
              value={noOfRooms}
              onChange={(e) => setNoOfRooms(e.target.value)}
            />
            <div className="row mt-2">
              <div className="col md-2">
                <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
              </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={booknow}>
              Book Your Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookingscreen;
