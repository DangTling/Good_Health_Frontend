import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/header";
import Menu from "../components/Menu";
import Footer from "../layout/footer";
import {
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from "../redux/reducer/cartReducer";
import { useNavigate, useParams } from "react-router-dom";
import { cancelOrder, getAllOrderByID } from "../service/orderService";
import { toast } from "react-toastify";

const OrderHasBuy = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listOrder, setListOrder] = useState([]);
  const handleDeleteCart = (id) => {
    dispatch(removeItemFromCart(id));
  };
  const handleAdd = (id) => {
    dispatch(incrementQuantity(id));
  };
  const handleMinute = (id) => {
    dispatch(decrementQuantity(id));
  };
  const handlePay = () => {
    navigate("/pay");
  };
  const { id } = useParams();
  const getAllOrder = async () => {
    try {
      const res = await getAllOrderByID(id);
      // console.log(res);
      setListOrder(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllOrder();
  }, []);
  const handleCancel = async (id) => {
    await cancelOrder(id);
    getAllOrder();
    toast.success("Hủy đơn thành công");
  };

  return (
    <div>
      <Header />
      <Menu />
      <div
        style={{
          padding: "0 10%",
          width: "100%",
        }}
      >
        <h2>Your History Shopping</h2>

        {cartItems ? (
          <>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name Receiver</th>
                  <th scope="col">Address Receiver</th>
                  <th scope="col">Phone number receiver</th>
                  <th>status</th>
                  <th>Total Payment</th>
                  <th>Cancel</th>
                </tr>
              </thead>
              <tbody>
                {listOrder.map((item) => (
                  <tr>
                    <th>{item.id}</th>
                    <td>{item.name_receiver}</td>
                    <td>{item.address_receiver}</td>
                    <td>{item.phone_number_receiver}</td>
                    <td>
                      {item.status === 0 ? (
                        <p>Chưa được xác nhận</p>
                      ) : item.status === 1 ? (
                        <p>Đã được chấp nhận</p>
                      ) : (
                        <p>Đã bị hủy</p>
                      )}
                    </td>
                    <td>{item.total_payment} VND</td>
                    {item.status === 0 ? (
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleCancel(item.id)}
                        >
                          Hủy đơn
                        </button>
                      </td>
                    ) : (
                      <td></td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p>Your History is empty.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default OrderHasBuy;
