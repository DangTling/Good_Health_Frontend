import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/header";
import Footer from "../layout/footer";
import Menu from "../components/Menu";
import { postOrder, postOrderDetail } from "../service/orderService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setCart } from "../redux/reducer/cartReducer";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      toast.error("Cần đăng nhập để thực hiện chức năng này");
      navigate("/login");
    } else {
      setName(user.name);
      setAddress(user.address);
      setPhone_number(user.phone_number);
    }
  }, [user]);
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [address, setAddress] = useState("");
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    try {
      if (totalAmount === 0) {
        toast.error("Lỗi thanh toán");
      } else {
        const response = await postOrder(
          user.id,
          name,
          address,
          phone_number,
          totalAmount
        );
        cartItems.map(async (item, index) => {
          console.log(response);
          const response2 = await postOrderDetail(
            response.DT.insertId,
            item.id,
            item.quantity
          );
        });
        dispatch(setCart([]));
        toast.success("Đơn hàng đã được gửi đi");
        navigate("/");
      }
    } catch (error) {
      toast.error("Lỗi thanh toán");
    }
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
        <h2>Payment</h2>
        <label htmlFor="">Tên người nhận</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Số điện thoại nhận hàng:</label>
        <input
          type="number"
          className="form-control"
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
        />
        <label htmlFor="">Địa chỉ nhận hàng:</label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>Giá: {item.price} VND</p>
                <p>Số lượng: {item.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <strong>Total: {totalAmount} VND</strong>
        </div>
        <button className="btn btn-danger" onClick={handlePayment}>
          Proceed to Payment
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
