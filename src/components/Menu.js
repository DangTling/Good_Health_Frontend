import { useNavigate } from "react-router-dom";
import "../assets/menu.scss";

function Menu() {
  const navigate = useNavigate();
  const handleNextPage = (e) => {
    switch (e.target.outerText) {
      case "Thuốc":
        navigate("/medicine");
        break;
      case "Bệnh":
        navigate("/disease");
        break;
      default:
        navigate("/notFound");
        break;
    }
  };
  return (
    <ul
      className="menu"
      style={{
        display: "flex",
        fontWeight: "500",
        fontSize: "15px",
      }}
    >
      <li onClick={(e) => handleNextPage(e)}>Thực phẩm chức năng</li>
      <li onClick={(e) => handleNextPage(e)}>Dược mỹ phẩm</li>
      <li onClick={(e) => handleNextPage(e)}>Chăm sóc cá nhân</li>
      <li onClick={(e) => handleNextPage(e)}>Thuốc</li>
      <li onClick={(e) => handleNextPage(e)}>Tiêm chủng</li>
      <li onClick={(e) => handleNextPage(e)}>Bệnh</li>
      <li onClick={(e) => handleNextPage(e)}>Góc sức khỏe</li>
      <li onClick={(e) => handleNextPage(e)}>Hệ thống nhà thuốc</li>
    </ul>
  );
}

export default Menu;
