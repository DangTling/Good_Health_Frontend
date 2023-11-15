import { useState } from "react";
import "../../assets/loginAdmin.scss";
import { loginAdmin } from "../../service/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { loginAdminAsync, setUser } from "../../redux/reducer/userReducer";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginAdmin = async (e) => {
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
      const response = await dispatch(loginAdminAsync(userInput));
      const user = response.payload.DT;
      if (user) {
        dispatch(
          setUser({ name: user.name, email: user.email, avatar: user.avatar })
        );
        localStorage.setItem("email", user.email);
        Cookies.set("jwt", user.access_token, { expires: 1 });
        console.log(user);
        toast.success("Đăng Nhập Thành Công");

        setEmail("");
        setPassword("");
        navigate("/admin");
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
    <div class="login">
      <h1>Login</h1>
      <form method="post">
        <input
          type="email"
          name="u"
          placeholder="Username"
          required="required"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          class="btn btn-primary btn-block btn-large"
          onClick={(e) => handleLoginAdmin(e)}
        >
          Let me in.
        </button>
      </form>
    </div>
  );
}

export default LoginAdmin;
