import React, { useState, useEffect } from "react";
import styles from "./request.module.css";
import Header1 from "../header/Header1";
import Footer from "../footer/footer";
import axios from "axios";
import Cookies from "js-cookie";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const NextRequest = () => {
  let { id } = useParams();

  console.log(id);

  const [order, setOrder] = useState("");

  // /acceptorreject/:id

  const updateOrder = async (status) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/acceptorreject/${id}`,
        { status: status }
      );

      // console.log(response.data.order);
    } catch (error) {
      console.error(error);
    }
  };

  const getOrders = async () => {
    // const lecturer = Cookies.get("user");
    // // console.log(JSON.parse(lecturer)._id);

    // const lecturerObj = JSON.parse(lecturer);

    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/order/${id}`
      );
      setOrder(response.data.order);
      console.log(response.data.order);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("order", order);
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
            {order.orderItems &&
              order.orderItems.map((orderItem) => (
                <div
                  style={{
                    padding: 20,
                    paddingRight: 30,
                    paddingLeft: 30,
                    fontSize: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {orderItem.name}

                  <img
                    src={orderItem.image}
                    width={100}
                    height={100}
                    style={{ borderRadius: 10, overflow: "hidden" }}
                  />
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
              onClick={() => updateOrder("rejected")}
              style={{
                padding: 15,
                backgroundColor: "#bda678",
                border: 0,
                borderRadius: 10,
              }}
              // className={styles.button}
            >
              Reject
            </button>
            <button
              onClick={() => updateOrder("accepted")}
              style={{
                padding: 15,
                backgroundColor: "#bda678",
                border: 0,
                borderRadius: 10,
              }}
              // className={styles.button}
            >
              Approve
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NextRequest;
