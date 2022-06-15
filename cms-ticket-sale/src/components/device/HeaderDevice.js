import imgnotify from "../../assets/images/iconnotify.png";
import chandung from "../../assets/images/chandung.jpg";
import Line from "../../assets/images/Line 42.png";
import { RightOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
const HeaderDevice = () => {
  return (
    <>
      <section className="headerdashboard" id="headerdashboard">
    
        <div className="headerdashboard-content">
          <img src={imgnotify} alt="" className="imgnotify" />
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
      </section>
    </>
  );
};

export default HeaderDevice;
