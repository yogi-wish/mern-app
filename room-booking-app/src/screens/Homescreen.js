import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Homescreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;
        // console.log(data);
        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {loading ? (
          <h1>Loading</h1>
        ) : rooms.length > 1 ? (
          rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2">
                <div className="row bs">
                  <div className="col-md-4">
                    <img src={room.imageurls[0]} className="smallimg" />
                  </div>
                  <div className="col-md-7">
                    <h1>{room.name}</h1>
                    <p>Max Count : {room.maxcount}</p>
                    <p>Phone Number : {room.phonenumber}</p>
                    <p>Type : {room.type}</p>
                    <div style={{ float: "right" }}>
                      <a href="/book">
                        <button className="btn btn-primary"> Book Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Error...</h1>
        )}
      </div>
    </div>
  );
}

export default Homescreen;
