import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/header.scss";
import logo from "../../assets/image/logo_web_a11ae0bbab.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/reducer/userReducer";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { getUser } from "../../service/userService";

function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(setUser(null));
    Cookies.remove("jwt");
    navigate("/login");
  };
  const handleSSO = async () => {
    const userInfo = await getUser(localStorage.getItem("email"));
    dispatch(setUser(userInfo[0]));
  };

  useEffect(() => {
    if (Cookies.get("jwt")) {
      handleSSO();
    }
  }, []);
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid ">
        <NavLink
          to={"/"}
          className="navbar-brand"
          style={{ marginRight: "12%" }}
        >
          <img src={logo} alt="Logo" />
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form
            class="d-flex"
            style={{
              position: "relative",
              width: "60%",
              height: "50px",
              padding: "0 5px",
              marginRight: "10%",
            }}
          >
            <input
              class="form-control "
              placeholder="Search some news about health"
              aria-label="Search"
              style={{ width: "100%" }}
            />

            <button
              className="btn"
              type="submit"
              style={{ paddingRight: "0%" }}
            >
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "32%",
                }}
              />
            </button>
          </form>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {user ? (
              <li class="nav-item dropdown" style={{ marginRight: "10px" }}>
                <NavLink
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={require(`../../assets/image/${user.avatar}`)}
                    alt="avatar"
                    height={50}
                    width={50}
                    style={{ borderRadius: "50%" }}
                  />
                </NavLink>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href={`/user/info/${user.email}`}>
                      <FontAwesomeIcon
                        icon="fa-solid fa-circle-info"
                        style={{ marginRight: "10%" }}
                      />
                      Information
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href={`/order/${user.id}`}>
                      <FontAwesomeIcon
                        icon="fa-solid fa-gear"
                        style={{ marginRight: "10%" }}
                      />
                      Buy History
                    </a>
                  </li>
                  <li
                    style={{ borderTop: "1px solid grey", cursor: "pointer" }}
                  >
                    <a class="dropdown-item" onClick={(e) => handleLogout(e)}>
                      <FontAwesomeIcon
                        icon="fa-solid fa-person-running"
                        style={{ marginRight: "10%" }}
                      />
                      Log out
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              <li
                class="nav-item dropdown"
                style={{ marginRight: "10px", padding: "6% 0" }}
              >
                <NavLink className="nav-link " to={"/login"}>
                  <FontAwesomeIcon
                    icon="fa-solid fa-user"
                    style={{
                      color: "white",
                      marginRight: "10px",
                    }}
                  />
                  Đăng nhập
                </NavLink>
              </li>
            )}
            <li class="nav-item" style={{ padding: "6% 0" }}>
              <NavLink className="nav-link bg" to="/cart">
                <FontAwesomeIcon
                  icon="fa-solid fa-cart-shopping"
                  style={{ color: "white", marginRight: "10px" }}
                />
                Giỏ hàng
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
