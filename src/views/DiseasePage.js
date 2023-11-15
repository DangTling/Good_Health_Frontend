import Menu from "../components/Menu";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/diseasePage.scss";
import {
  fetchAllMedicineByType,
  searchMedicine,
} from "../service/medicineService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchAllDiseaseByType,
  searchDisease,
} from "../service/diseaseService";
import { useNavigate } from "react-router-dom";

function DiseasePage() {
  const [hideMedicine, setHideMedicine] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/disease/${id}`);
  };
  const handleTypeMedicine = async (type) => {
    try {
      const data = await fetchAllDiseaseByType(type);
      if (data === null) {
        toast.error("Không tìm thấy thuốc");
        return;
      }
      setData(data);
      setHideMedicine(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSetType = (e) => {
    e.preventDefault();
    setHideMedicine(true);
  };
  useEffect(() => {
    if (searchValue !== "") {
      handleSearch(searchValue);
    } else {
      setHideMedicine(true);
    }
  }, [searchValue]);
  const handleSearch = async (searchValue) => {
    try {
      const data = await searchDisease(searchValue);
      setData(data);
      setHideMedicine(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <Menu />
      <div className="content">
        <span>Trang chủ </span>/ Bệnh
        <div className="search">
          <h3>Tra cứu bệnh & triệu chứng</h3>
          <form action="">
            <input
              type="text"
              placeholder="Tìm kiếm bệnh theo tên hoặc triệu chứng"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn" onClick={() => handleSearch}>
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
          <img
            src="https://nhathuoclongchau.com.vn/estore-images/medicine-search-image.svg"
            alt=""
          />
        </div>
        <h3>Nhóm bệnh chuyên khoa</h3>
        {hideMedicine ? (
          <div className="list_item">
            <div
              className="item"
              onClick={() => handleTypeMedicine("Cơ - Xương-Khớp")}
            >
              <div className="name">
                <p>Cơ - Xương-Khớp</p>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Da - Tóc - Móng")}
            >
              <div className="name">
                <p>Da - Tóc - Móng</p>
              </div>
            </div>
            <div className="item" onClick={() => handleTypeMedicine("Máu")}>
              <div className="name">
                <p>Máu</p>
              </div>
            </div>
            <div className="item" onClick={() => handleTypeMedicine("Hô hấp")}>
              <div className="name">
                <p>Hô hấp</p>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Nội tiết - chuyển hóa")}
            >
              <div className="name">
                <p>Nội tiết - chuyển hóa</p>
              </div>
            </div>
            <div className="item" onClick={() => handleTypeMedicine("Dị ứng")}>
              <div className="name">
                <p>Dị ứng</p>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Tim mạch")}
            >
              <div className="name">
                <p>Tim mạch</p>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Răng - Hàm - Mặt")}
            >
              <div className="name">
                <p>Răng - Hàm - Mặt</p>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Sức khỏe giới tính")}
            >
              <div className="name">
                <p>Sức khỏe giới tính</p>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Sức khỏe sinh sản")}
            >
              <div className="name">
                <p>Sức khỏe sinh sản</p>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Tai - Mũi - Họng")}
            >
              <div className="name">
                <p>Tai - Mũi - Họng</p>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Tâm thần")}
            >
              <div className="name">
                <p>Tâm thần</p>
              </div>
            </div>
          </div>
        ) : (
          <div class="row">
            <button
              className="btn btn-success"
              onClick={handleSetType}
              style={{ marginBottom: "3%", width: "30%" }}
            >
              Quay lại
            </button>
            <div class="col-md-9">
              <div class="products">
                <div class="row">
                  {data.map((item, index) => {
                    return (
                      <div class="col-md-3 col-sm-3">
                        <div
                          class="card card-product card-plain"
                          onClick={() => handleDetail(item.id)}
                        >
                          <div class="card-image">
                            <img
                              src={item.image}
                              alt="Rounded Image"
                              class="img-rounded img-responsive"
                            />

                            <div class="card-body">
                              <div class="card-description">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-description">{item.type}</p>
                              </div>
                              <div class="price">
                                <h5></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div class="col-md-3 offset-md-4">
                    <button
                      rel="tooltip"
                      title="This is a morphing button"
                      class="btn btn-round btn-outline-default"
                      id="successBtn"
                      data-toggle="morphing"
                      data-rotation-color="gray"
                    >
                      Load more...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DiseasePage;
