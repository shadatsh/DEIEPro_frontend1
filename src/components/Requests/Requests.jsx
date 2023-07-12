import React, { useEffect, useState } from "react";
import styles from "./request.module.css";
import Header1 from "../header/Header1";
import Footer from "../footer/footer";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Requests = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    console.log("Cookies", Cookies);
    const lecturer = Cookies.get("user");
    // console.log(JSON.parse(lecturer)._id);
    let lecturerId = "";
    // if (lecturer) {
    if (Cookies.get("user")) {
      lecturerId = JSON.parse(lecturer)._id;
    }

    // }
    console.log("Lecturer Id---->", lecturerId);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/lecturerOrders/${lecturerId}`
      );
      setOrders(response.data.orders);
      console.log(response.data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (!Cookies.get("user")) {
      navigate("/login");
    }
  }, [Cookies]);

  return (
    <div>
      <Header1 />
      <div className={styles.container}>
        <button className={styles.button}>New Requests</button>

        <div
          style={{
            width: "70%",
            height: "70%",
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className={{}}
        >
          <div
            style={{
              height: 100,
              display: "flex",
              flexGrow: 1,
              overflow: "scroll",
              width: "100%",
              flexDirection: "column",
            }}
          >
            {orders.map((order) => (
              <div
                style={{
                  padding: 20,
                  paddingLeft: 50,
                  fontSize: 32,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a
                  href={`/next/${order._id}`}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  {order.user.name} - CLICK HERE
                </a>
              </div>
            ))}
          </div>
          <div
            style={{
              width: "95%",
              display: "flex",
              alignSelf: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <button
              style={{
                padding: 15,
                backgroundColor: "#bda678",
                border: 0,
                borderRadius: 10,
              }}
              // className={styles.button}
            >
              Back
            </button>
            <button
              style={{
                padding: 15,
                backgroundColor: "#bda678",
                border: 0,
                borderRadius: 10,
              }}
              // className={styles.button}
            >
              <a href="/next/123">Next</a>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Requests;
