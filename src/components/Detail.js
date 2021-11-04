import React from "react";
import VG from "../db/data.json";
import { Carousel } from "react-bootstrap";
import "../components/detail.css";

class Detail extends React.Component {
  render(props) {
    const { location, history, match } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    const { id } = match.params;

    const detailData = Object.values(VG.datas).filter(
      (d) => d.crtfc_upso_mgt_sno === Number(id)
    )[0];

    return (
      <div className="food__detail">
        <div className="detail__info">
          <div className="detail__img">
            <div className="line_part2"></div>
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-350 h-350"
                  src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1964&q=80"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-350 h-350"
                  src="https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-350 h-350"
                  src="https://images.unsplash.com/photo-1515942400420-2b98fed1f515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

            <span className="gradient_part"></span>
            <div className="line_part1"></div>
          </div>

          <div className="detail__part">
            <div className="detail__title">
              <span className="detail__star1">*</span>
              <p className="detail__name"> {detailData.upso_nm}</p>
            </div>
            <div className="detail__detail">
              <p className="detail__addr">
                <span className="detail__indicate">Address:</span>{" "}
                {detailData.rdn_code_nm} {detailData.rdn_detail_addr}
              </p>

              <p className="detail__tel">
                <span className="detail__indicate">Tel:</span>{" "}
                {detailData.tel_no}
              </p>
              <p>
                <span className="detail__indicate">Type:</span>{" "}
                {detailData.crtfc_gbn_nm}
              </p>
              <div className="detail__list">
                <span className="detail__star2">*</span>
                <p className="detail__menu">MENU</p>
              </div>
              <p className="detail__food">{detailData.food_menu}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
