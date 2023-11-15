import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../layout/header";
import Menu from "../components/Menu";
import Footer from "../layout/footer";
import {
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from "../redux/reducer/cartReducer";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        <h2>Your Shopping Cart</h2>

        {cartItems ? (
          <>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr>
                    <th>{item.id}</th>
                    <td>{item.name}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAdd(item.id)}
                      >
                        +
                      </button>
                      {item.quantity}
                      <button
                        className="btn btn-primary"
                        onClick={() => handleMinute(item.id)}
                      >
                        -
                      </button>
                    </td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteCart(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-danger" onClick={() => handlePay()}>
              Thanh toán
            </button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCart;
