import percen90 from "../../assets/images/percen90.png";
import percen76 from "../../assets/images/percen76.png";
import percen86 from "../../assets/images/percen86.png";
import iconsmalldevice from "../../assets/images/iconsmalldevice.png";
import iconsmallservice from "../../assets/images/iconsmallservice.png";
import iconsmallnumber from "../../assets/images/iconsmallnumber.png";
import chandung from "../../assets/images/chandung.jpg";
import imgnotify from "../../assets/images/iconnotify.png";
import Line from "../../assets/images/Line 42.png";
import DatePicker from "sassy-datepicker";
import { Link, NavLink } from "react-router-dom";
const OverView = () => {
  const onChange = (date) => {
    console.log(date.toString());
  };
  return (
    <>
      <section className="overview" id="overview">
        <div className="overview-container">
          <div className="headerdashboard-content">
            <div className="manageDevice-container-main-box">
              <div className="dropdown">
                <img src={imgnotify} alt="" className="imgnotify" />
                <div className="dropdown-list">
                  <div className="Notify">
                    <h5 className="Notify-1">Thông báo</h5>
                  </div>
                  <div className="Notify-2">
                    <h5 className="user-name">
                      Người dùng : Nguyễn Thị Thùy Dung
                    </h5>
                    <h5 className="time-number">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line" />
                    <h5 className="user-name-1">
                      Người dùng : Nguyễn Thiên Chính
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                    <h5 className="user-name-1">
                      Người dùng : Võ Thị Kim Liên
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                    <h5 className="user-name-1">
                      Người dùng : Nguyễn Quốc Huy
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                    <h5 className="user-name-1">Người dùng : Võ Lan Anh</h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                    <h5 className="user-name-1">
                      Người dùng : Nguyễn Trúc Anh
                    </h5>
                    <h5 className="time-number-1">
                      Thời gian nhận số : 12h20 ngày 31/12/2021
                    </h5>
                    <img src={Line} alt="" className="Line-1" />
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              className="headerdashboard-content-box"
              to="/user"
              exact="true"
            >
              <img src={chandung} alt="" className="imguser" />
              <div className="infomation">
                <h3 className="sub-label">Xin chào</h3>
                <h4 className="label">Ngô Võ Quốc Khánh</h4>
              </div>
            </NavLink>
          </div>

          <h2 className="title">Tổng quan</h2>
          <NavLink to="/device" exact="true">
            <div className="overview-container-main">
              <div className="overview-container-main-box">
                <div className="image">
                  <img src={percen90} alt="" className="imgpercent" />
                </div>
                <div className="parameter">
                  <h3>4.221</h3>
                  <div>
                    <img src={iconsmalldevice} alt="" className="icondevice" />
                    <span className="sub-param">Thiết bị</span>
                  </div>
                </div>
              </div>
              <div className="overview-container-main-box column">
                <li className="yello">
                  <p>Đang hoạt động</p> <span>3.799</span>
                </li>
                <li className="gray">
                  <p>Ngưng hoạt động</p> <span>422</span>
                </li>
              </div>
            </div>
          </NavLink>
          <NavLink to="/service" exact="true">
            <div className="overview-container-main">
              <div className="overview-container-main-box">
                <div className="image">
                  <img src={percen76} alt="" className="imgpercent" />
                </div>
                <div className="parameter">
                  <h3>276</h3>
                  <div>
                    <img src={iconsmallservice} alt="" className="icondevice" />
                    <span className="sub-param blue">Dịch vụ</span>
                  </div>
                </div>
              </div>
              <div className="overview-container-main-box column">
                <li className="blue">
                  <p>Đang hoạt động</p> <span className="blue">210</span>
                </li>
                <li className="gray">
                  <p>Ngưng hoạt động</p> <span className="blue">66</span>
                </li>
              </div>
            </div>
          </NavLink>
          <NavLink to="/number" exact="true">
            <div className="overview-container-main">
              <div className="overview-container-main-box">
                <div className="image">
                  <img src={percen86} alt="" className="imgpercent" />
                </div>
                <div className="parameter">
                  <h3>276</h3>
                  <div>
                    <img src={iconsmallnumber} alt="" className="icondevice" />
                    <span className="sub-param green">Cấp số</span>
                  </div>
                </div>
              </div>
              <div className="overview-container-main-box column">
                <li className="yello">
                  <p>Đã sử dụng</p> <span className="green">3.721</span>
                </li>
                <li className="gray">
                  <p>Đang chờ</p> <span className="green">486</span>
                </li>
                <li className="pink">
                  <p>Ngưng hoạt động</p> <span className="green">32</span>
                </li>
              </div>
            </div>
          </NavLink>

          <div className="overview-container-datepicker">
            <DatePicker onChange={onChange} />
          </div>
        </div>
      </section>
    </>
  );
};

export default OverView;
