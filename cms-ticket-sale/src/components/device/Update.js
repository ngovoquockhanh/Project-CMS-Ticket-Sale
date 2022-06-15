import { NavLink } from "react-router-dom";
import exit from "../../assets/images/exit.png";
const ManageDevice = () => {
  return (
    <>
      <section className="manageDevice">
        <div className="manageDevice-container">
          <h2 className="title">Quản lý thiết bị</h2>
          <div className="manageDevice-container-main">
            <h3 className="heading">Thông tin thiết bị</h3>
            <div className="flex-box">
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Loại thiết bị: <span>*</span>
                </h5>
                <div className="dropdown">
                  <select className="dropdown-select">
                    <option className="dropdown-list__item">Kiosk</option>
                    <option className="dropdown-list__item">
                      Display couter
                    </option>
                  </select>
                </div>
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Mã thiết bị: <span>*</span>
                </h5>
                <div id="KIO">
                  <p>KIO-01</p>
                </div>
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Tên thiết bị: <span>*</span>
                </h5>

                <div id="KIO">
                  <p>KIOSK</p>
                </div>
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Tên đăng nhập: <span>*</span>
                </h5>

                <div id="KIO">
                  <p>Linhky001</p>
                </div>
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Mật Khẩu: <span>*</span>
                </h5>

                <div id="KIO">
                  <p>CMS</p>
                </div>
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Địa chỉ IP: <span>*</span>
                </h5>
                <div id="KIO">
                  <p>128.172.389</p>
                </div>
              </div>
              <div className="manageDevice-container-main-box">
                <h5 className="sub-heading">
                  Dịch vụ sử dụng: <span>*</span>
                </h5>
                <div id="example1">
                  <a className="Exploring">
                    <p className="Exploring1">Khám tim mạch</p>
                    <img src={exit} alt="" className="exit" />
                  </a>
                  <a className="extra">
                    <p className="extra1">Khám sản phụ khoa</p>
                    <img src={exit} alt="" className="exit" />
                  </a>
                  <a className="visit">
                    <p className="visit1">Khám răng hàm mặc</p>
                    <img src={exit} alt="" className="exit" />
                  </a>
                  <a className="ears">
                    <p className="ears1">Khám tai mũi họng</p>
                    <img src={exit} alt="" className="exit" />
                  </a>
                  <a className="shout">
                    <p className="shout1">Khám hô hấp </p>
                    <img src={exit} alt="" className="exit" />
                  </a>
                </div>
              </div>
            </div>
            <div className="manageDevice-container-main-note">
              <span>*</span>
              <h3 className="sub-note">Là trường thông tin bắt buộc</h3>
            </div>
          </div>
          <NavLink to="/device" exact="true">
            <div className="function">
              <button className="btn-cancel">Hủy bỏ</button>

              <button className="btn">Cập nhật</button>
            </div>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default ManageDevice;
