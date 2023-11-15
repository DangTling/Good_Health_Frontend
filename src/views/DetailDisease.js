import Menu from "../components/Menu";
import Footer from "../layout/footer";
import Header from "../layout/header";
import "../assets/detailMedicine.scss";
import SliderImage from "../components/sliderImage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetailMedicine } from "../service/medicineService";
import { fetchDetailDisease } from "../service/diseaseService";

const DetailDisease = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const detailMedicine = async () => {
    try {
      const data = await fetchDetailDisease(id);
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detailMedicine();
    console.log(data);
  }, []);
  return (
    <>
      <Header />
      <Menu />
      <div style={{ padding: "0 10%" }}>
        <SliderImage
          image={data.image}
          image2={data.image_second}
          image3={data.image_third}
        />
      </div>
      <div
        class="section section-white"
        style={{ padding: "0 10%", width: "100%" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto text-center title">
              <h2>{data.name}</h2>
              <h3 class="title-uppercase">
                <small>{data.type}</small>
              </h3>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 ml-auto mr-auto">
              <div class="text-center">
                <span class="label label-warning main-tag">Trending</span>

                <h6 class="title-uppercase">October 10, 2016</h6>
              </div>
            </div>
            <div class="col-md-8 ml-auto mr-auto">
              <a href="javascrip: void(0);">
                <div class="card" data-radius="none"></div>
                <p class="image-thumb text-center">Photo by Cam Adams</p>
              </a>
              <div class="article-content">
                <p></p>
                <h4>{data.name} là gì:</h4>
                <p>{data.defination}</p>
                <h4>Triệu chứng</h4>
                <p>{data.symptom}</p>

                <blockquote class="blockquote">
                  <h4>Nguyên nhân: </h4>
                  <p>{data.reason}</p>
                  <footer>
                    - Chris Brogan in{" "}
                    <cite title="Source Title">Trust Agents</cite>
                  </footer>
                </blockquote>
                <h4>Tác hại: </h4>
                <p>{data.harm}</p>

                <h4>
                  <strong>Cách chữa trị</strong>
                </h4>
                <p>{data.treatment}</p>
              </div>

              <div class="article-footer">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <h5>Tags:</h5>
                      <span class="label label-default">Motivational</span>
                      <span class="label label-default">Newsletter</span>
                      <span class="label label-warning">Trending</span>
                    </div>
                    <div class="col-md-4 ml-auto">
                      <div class="sharing">
                        <h5>Spread the word</h5>
                        <button class="btn btn-just-icon btn-twitter">
                          <i class="fa fa-twitter"></i>
                        </button>
                        <button class="btn btn-just-icon btn-facebook">
                          <i class="fa fa-facebook"> </i>
                        </button>
                        <button class="btn btn-just-icon btn-google">
                          <i class="fa fa-google"> </i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container">
                <div class="row">
                  <div class="media">
                    <a class="pull-left" href="#paper-kit">
                      <div class="avatar big-avatar">
                        <img
                          class="media-object"
                          alt="64x64"
                          src={data.image_third}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailDisease;
