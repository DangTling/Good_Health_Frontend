import React, { useState } from "react";
import "../assets/login.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  loginUserAsync,
  registerUserAsync,
  setUser,
} from "../redux/reducer/userReducer";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [activeForm, setActiveForm] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [birth_of_date, setBirth_of_date] = useState("");
  const [gender, setGender] = useState("male");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchForm = (form) => {
    setActiveForm(form);
  };
  const handlePressKey = (e) => {
    if (e.key === "Enter") {
      if (activeForm === "login") {
        handleLogin();
      } else {
        handleSignup();
      }
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    let userInput = {
      name,
      email,
      address,
      phone_number,
      birth_of_date,
      gender,
      password,
      avatar,
    };
    if (
      name === "" ||
      email === "" ||
      address === "" ||
      phone_number === "" ||
      birth_of_date === "" ||
      gender === "" ||
      password === "" ||
      avatar === ""
    ) {
      toast.error("Yêu cầu điền đủ thông tin");
      return;
    }
    try {
      await dispatch(registerUserAsync(userInput));
      toast.success("Đăng Ký Thành Công");
      switchForm("login");
      setName("");
      setAddress("");
      setAvatar("");
      setBirth_of_date("");
      setEmail("");
      setGender("");
      setPassword("");
      setPhone_number("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    let userInput = {
      email,
      password,
    };
    if (email === "" || password === "") {
      toast.error("Yêu cầu điền đủ thông tin");
      return;
    }
    try {
      const response = await dispatch(loginUserAsync(userInput));
      const user = response.payload.DT;
      if (user) {
        dispatch(
          setUser({ name: user.name, email: user.email, avatar: user.avatar })
        );
        localStorage.setItem("email", user.email);
        Cookies.set("jwt", user.access_token, { expires: 1 });
        console.log(user);
        toast.success("Đăng Nhập Thành Công");
        switchForm("login");
        setEmail("");
        setPassword("");
        navigate("/");
      } else {
        toast.error("Tài khoản hoặc mật khẩu không chính xác");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="forms-section">
      <h1 className="section-title">Welcome to Good Health</h1>
      <div className="forms">
        <div
          className={`form-wrapper ${
            activeForm === "login" ? "is-active" : ""
          }`}
        >
          <button
            type="button"
            className="switcher switcher-login"
            onClick={() => switchForm("login")}
          >
            Login
            <span className="underline"></span>
          </button>
          <form class="form form-login">
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div class="input-block">
                <label for="login-email">E-mail</label>
                <input
                  id="login-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="input-block">
                <label for="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </fieldset>
            <button
              type="submit"
              class="btn-login"
              onKeyDown={(e) => handlePressKey(e)}
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </form>
        </div>
        <div
          className={`form-wrapper ${
            activeForm === "signup" ? "is-active" : ""
          }`}
        >
          <button
            type="button"
            className="switcher switcher-signup"
            onClick={() => switchForm("signup")}
          >
            Sign Up
            <span className="underline"></span>
          </button>
          <form class="form form-signup">
            <fieldset>
              <legend>
                Please, enter your email, password and password confirmation for
                sign up.
              </legend>
              <div class="input-block">
                <label for="signup-password">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="input-block">
                <label for="signup-password">Address</label>
                <input
                  type="text"
                  placeholder="Your current address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div class="input-block">
                <label for="signup-password">Phone Number</label>
                <input
                  type="number"
                  placeholder="Fill your number"
                  value={phone_number}
                  onChange={(e) => setPhone_number(e.target.value)}
                />
              </div>
              <div class="input-block">
                <label for="signup-password">Date Of Birth</label>
                <input
                  type="date"
                  value={birth_of_date}
                  onChange={(e) => setBirth_of_date(e.target.value)}
                />
              </div>
              <div class="input-block">
                <label for="signup-password">Gender</label>
                <select
                  value={gender}
                  id=""
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="input-block">
                <label for="signup-email">E-mail</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="Fill your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="input-block">
                <label for="signup-password">Password</label>
                <input
                  type="password"
                  placeholder="Fill your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="input-block">
                <label for="signup-password-confirm">Avatar</label>
                <input
                  id="signup-password-confirm"
                  class="form-control"
                  type="file"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </div>
            </fieldset>
            <button
              type="submit"
              class="btn-signup"
              onKeyDown={(e) => handlePressKey(e)}
              onClick={(e) => handleSignup(e)}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
