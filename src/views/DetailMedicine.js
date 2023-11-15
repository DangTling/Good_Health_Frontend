import Menu from "../components/Menu";
import Footer from "../layout/footer";
import Header from "../layout/header";
import "../assets/detailMedicine.scss";
import SliderImage from "../components/sliderImage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetailMedicine } from "../service/medicineService";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/reducer/cartReducer";
import { toast } from "react-toastify";

function DetailMedicine() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const detailMedicine = async () => {
    try {
      const data = await fetchDetailMedicine(id);
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detailMedicine();
    console.log(data);
  }, []);
  const handleAddCart = async (item) => {
    await dispatch(
      addItemToCart({
        id: item.id,
        name: item.name,
        quantity: quantity,
        price: item.price * quantity,
      })
    );
    toast.success("Thêm sản phẩm vào giỏ hàng thành công");
  };
  return (
    <>
      <Header />
      <Menu />

      <div style={{ padding: "0  10%" }}>
        <div class="row">
          <div class="col-md-7 col-sm-6">
            <div id="carousel" class="ml-auto mr-auto">
              <SliderImage
                image={data.image}
                image2={data.image_second}
                image3={data.image_third}
              />
            </div>
          </div>
          <div class="col-md-5 col-sm-6">
            <h2>{data.name}</h2>
            <h4 class="price">
              {data.price ? (
                <strong>{data.price} VND/Vỉ</strong>
              ) : (
                <strong>Thuốc cần kê theo chỉ thị của bác sĩ</strong>
              )}
            </h4>

            <p> Công ty sản xuất: {data.company}</p>
            <strong>Thành Phần: {data.ingredient}</strong>
            <h4>Số hiệu đăng ký: {data.registration_number}</h4>

            <div class="row">
              <div class="col-md-7 offset-md-5 col-sm-8">
                <button
                  class="btn btn-danger btn-block btn-round"
                  onClick={() => handleAddCart(data)}
                >
                  Thêm vào giỏ hàng &nbsp;<i class="fa fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <h3>Giới thiệu chung:</h3>
        <p>{data.description}</p>
      </div>
      <div className="usage">
        <h3>Hướng dẫn sử dụng:</h3>
        <p>{data.usage_of_it}</p>
      </div>
      <div className="side_effect">
        <h3>Tác dụng phụ:</h3>
        <p>{data.side_effects}</p>
      </div>
      <div className="note">
        <h3>Lưu ý cho người dùng:</h3>
        <p>{data.note}</p>
      </div>
      <Footer />
    </>
  );
}

export default DetailMedicine;
