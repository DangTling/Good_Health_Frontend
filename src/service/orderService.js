import Cookies from "js-cookie";
import axios from "../service/axios";

const postOrder = async (
  id_user,
  name_receiver,
  address_receiver,
  phone_number_receiver,
  total_payment
) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.post(`/order/add`, {
      headers: {
        cookies: token,
      },
      id_user,
      name_receiver,
      address_receiver,
      phone_number_receiver,
      total_payment,
    });

    if (response.EC === "1") {
      return response;
    } else {
      console.error(`Lỗi yêu cầu: ${response.status} - ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error("Lỗi không xác định:", error);
    return null;
  }
};
const postOrderDetail = async (id_order, id_medicine, quantity) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.post(`/order_detail/add`, {
      headers: {
        cookies: token,
      },
      id_order,
      id_medicine,
      quantity,
    });
    console.log(response);
    if (response.EC === "1") {
      return response.DT;
    } else {
      console.error(`Lỗi yêu cầu: ${response.status} - ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error("Lỗi không xác định:", error);
    return null;
  }
};
const getAllOrderByID = async (id) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/order/${id}`, {
      headers: {
        cookies: token,
      },
    });
    console.log(response);
    if (response.EC === "1") {
      return response.DT;
    } else {
      console.error(`Lỗi yêu cầu: ${response.status} - ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error("Lỗi không xác định:", error);
    return null;
  }
};
const searchMedicine = async (value) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/medicine/search/${value}`, {
      headers: {
        cookies: token,
      },
    });
    console.log(response);
    if (response.EC === "1") {
      return response.DT;
    } else {
      console.error(`Lỗi yêu cầu: ${response.status} - ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error("Lỗi không xác định:", error);
    return null;
  }
};
const cancelOrder = async (id) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.put(`/order/cancel/${id}`, {
      headers: {
        cookies: token,
      },
    });
    console.log(response);
    if (response.EC === "1") {
      return response.DT;
    } else {
      console.error(`Lỗi yêu cầu: ${response.status} - ${response.statusText}`);
      return null;
    }
  } catch (error) {
    console.error("Lỗi không xác định:", error);
    return null;
  }
};
export {
  postOrder,
  searchMedicine,
  cancelOrder,
  postOrderDetail,
  getAllOrderByID,
};
