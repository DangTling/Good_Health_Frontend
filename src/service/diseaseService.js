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
const fetchAllDisease = async () => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/disease`, {
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
const fetchAllDiseaseByType = async (type) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/disease/${type}`, {
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
const fetchDetailDisease = async (id) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/disease/detail/${id}`, {
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
const searchDisease = async (value) => {
  try {
    let token = Cookies.get("jwt");
    if (!token) {
      console.error("Thiếu access token");
      return null;
    }

    const response = await axios.get(`/disease/search/${value}`, {
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
  fetchAllDisease,
  fetchAllDiseaseByType,
  searchDisease,
  fetchDetailDisease,
};
