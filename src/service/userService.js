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
const loginUser = (email, password) => {
  return axios.post(`/user/login`, { email, password });
};
const loginAdmin = (email, password) => {
  return axios.post(`/admin/login`, { email, password });
};

const getUser = async (email) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/user/info/${email}`, {
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

export { signupUser, loginUser, getUser, loginAdmin };
