import Cookies from "js-cookie";
import axios from "../service/axios";

const signupUser = (
  name,
  email,
  address,
  phone_number,
  birth_of_date,
  gender,
  password,
  avatar
) => {
  return axios.post("/user/register", {
    name,
    email,
    address,
    phone_number,
    birth_of_date,
    gender,
    password,
    avatar,
  });
};
const fetchAllMedicine = async () => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/medicine`, {
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
const fetchAllMedicineByType = async (type) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/medicine/${type}`, {
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
const fetchDetailMedicine = async (id) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/medicine/detail/${id}`, {
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
  signupUser,
  fetchAllMedicine,
  fetchAllMedicineByType,
  searchMedicine,
  fetchDetailMedicine,
};
