import Menu from "../components/Menu";
import Footer from "../layout/footer";
import Header from "../layout/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/medicinePage.scss";
import {
  fetchAllMedicineByType,
  searchMedicine,
} from "../service/medicineService";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MedicinePage() {
  const [hideMedicine, setHideMedicine] = useState(true);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleTypeMedicine = async (type) => {
    try {
      const data = await fetchAllMedicineByType(type);
      console.log(data);
      //   if (data === null) {
      //     toast.error("Không tìm thấy thuốc");
      //     return;
      //   }
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
      const data = await searchMedicine(searchValue);
      setData(data);
      setHideMedicine(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDetail = (id) => {
    navigate(`/medicine/${id}`);
  };
  return (
    <>
      <Header />
      <Menu />
      <div className="content">
        <span>Trang chủ </span>/ Thuốc
        <div className="search">
          <h3>Tra cứu thuốc & biệt dược</h3>
          <form action="">
            <input
              type="text"
              placeholder="Tìm kiếm thuốc theo tên hoặc thành phần"
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
        <h3>Thuốc theo nhóm trị liệu</h3>
        {hideMedicine ? (
          <div className="list_item">
            <div
              className="item"
              onClick={() =>
                handleTypeMedicine(
                  "Thuốc thay thế ( y học cổ truyền & hỗ trợ khác)"
                )
              }
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/thuoc_thay_the_y_hoc_co_truyen_ho_tro_khac_level_2_dad2a7eff7.png"
                alt=""
              />
              <div className="name">
                <p>Thuốc thay thế ( y học cổ truyền & hỗ trợ khác)</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Hệ tim mạch & tạo máu")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/he_tim_mach_tao_mau_level_2_c85b42b397.png"
                alt=""
              />
              <div className="name">
                <p>Hệ tim mạch & tạo máu</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() =>
                handleTypeMedicine("Thuốc kháng sinh (đường toàn thân)")
              }
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/thuoc_khang_sinh_duong_toan_than_level_2_b033595f14.png"
                alt=""
              />
              <div className="name">
                <p>Thuốc kháng sinh (đường toàn thân)</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Thuốc chống ung thư")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/thuoc_chong_ung_thu_level_2_ba9b79b543.png"
                alt=""
              />
              <div className="name">
                <p>Thuốc chống ung thư</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Hệ thần kinh trung ương")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/he_than_kinh_trung_uong_level_2_02dbca0122.png"
                alt=""
              />
              <div className="name">
                <p>Hệ thần kinh trung ương</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Hệ tiêu hóa & gan mật")}
            >
              <img
                src="	https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/he_tieu_hoa_gan_mat_level_2_fbbb4ffa80.png"
                alt=""
              />
              <div className="name">
                <p>Hệ tiêu hóa & gan mật</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Hệ tiết niệu-sinh dục")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/he_tiet_nieu_sinh_duc_level_2_e3d7d9ed85.png"
                alt=""
              />
              <div className="name">
                <p>Hệ tiết niệu-sinh dục</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Hormon (Nội tiết tố)")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/hormon_noi_tiet_to_level_2_bb876f466a.png"
                alt=""
              />
              <div className="name">
                <p>Hormon (Nội tiết tố)</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Hệ hô hấp")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/he_ho_hap_level_2_1206a0348a.png"
                alt=""
              />
              <div className="name">
                <p>Hệ hô hấp</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Dị ứng & hệ miễn dịch")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/di_ung_he_mien_dich_level_2_e0c11669ec.png"
                alt=""
              />
              <div className="name">
                <p>Dị ứng & hệ miễn dịch</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Hệ nội tiết & chuyển hóa")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/he_noi_tiet_chuyen_hoa_level_2_b103e8fd35.png"
                alt=""
              />
              <div className="name">
                <p>Hệ nội tiết & chuyển hóa</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
            <div
              className="item"
              onClick={() => handleTypeMedicine("Sản phẩm dinh dưỡng")}
            >
              <img
                src="https://cdn.nhathuoclongchau.com.vn/unsafe/48x48/https://cms-prod.s3-sgn09.fptcloud.com/san_pham_dinh_duong_level_2_65365106f4.png"
                alt=""
              />
              <div className="name">
                <p>Sản phẩm dinh dưỡng</p>
                <span>?? sản phẩm</span>
              </div>
            </div>
          </div>
        ) : (
          <div class="row">
            <div class="col-md-3">
              <div class="card card-refine">
                <div
                  class="panel-group"
                  id="accordion"
                  aria-multiselectable="true"
                  aria-expanded="true"
                >
                  <div
                    class="card-header card-collapse"
                    role="tab"
                    id="clothingGear"
                  >
                    <h5 class="mb-0 panel-title">
                      <a
                        class=""
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#clothing"
                        aria-expanded="true"
                        aria-controls="collapseSecond"
                      >
                        Giá cả
                        <i class="nc-icon nc-minimal-down"></i>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="clothing"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  ></div>
                  <div
                    class="card-header card-collapse"
                    role="tab"
                    id="designer"
                  >
                    <h5 class="mb-0 panel-title">
                      <a
                        class=""
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#refineDesigner"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Công ty sản xuất
                        <i class="nc-icon nc-minimal-down"></i>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="refineDesigner"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  ></div>

                  <div class="card-header card-collapse" role="tab" id="color">
                    <h5 class="mb-0 panel-title">
                      <a
                        class=""
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href=""
                        aria-expanded="true"
                        aria-controls="collapseTree"
                        onClick={(e) => handleSetType(e)}
                      >
                        Loại Thuốc
                        <i class="nc-icon nc-minimal-down"></i>
                      </a>
                    </h5>
                  </div>
                  <div
                    id="colorMaker"
                    class="collapse"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  ></div>
                </div>
              </div>
            </div>

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
                                {item.price ? (
                                  <h5>{item.price} VND/Vỉ</h5>
                                ) : (
                                  <h5>Thuốc cần chỉ dẫn của bác sĩ</h5>
                                )}
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

export default MedicinePage;
