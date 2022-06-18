import { FiSearch } from "react-icons/fi";
import chart from "../../assets/images/chart.png";
import chart1 from "../../assets/images/chart -1.png";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import Rectangle from "../../assets/images/Rectangle .png";
import moment from "moment";
import Popup from "reactjs-popup";
import { Input, Pagination } from "antd";
import { DatePicker, Space } from "antd";
import { FaCaretRight } from "react-icons/fa";
import Group2 from "../../assets/images/Group2.png";
const HomeMain = () => {
  const { RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
  return (
    <>
      <section className="Homemain">
        <div className="home-1">
          <h2 className="Statistical">Thống kê</h2>
          <div className="chart">
            <Space direction="vertical" size={12} className="Statistical-day">
              <DatePicker
                defaultValue={moment("10/10/2021", dateFormatList[0])}
                format={dateFormatList}
              />
            </Space>
            <h3 className="turnover-name">Doanh thu </h3>
            <div className="turnover">
              <p className="number-name">260tr</p>
            </div>
            <div className="turnover-1">
              <p className="number-name">220tr</p>
            </div>
            <div className="turnover-2">
              <p className="number-name">180tr</p>
            </div>
            <div className="turnover-3">
              <p className="number-name">140tr</p>
            </div>
            <div className="name-day">
              <p className="day-1">Thứ 2</p>
              <p className="day-1">Thứ 3</p>
              <p className="day-1">Thứ 4</p>
              <p className="day-1">Thứ 5</p>
              <p className="day-1">Thứ 6</p>
              <p className="day-1">Thứ 7</p>
              <p className="day-1">CN</p>
            </div>
            <img src={Group2} alt="" className="group" />
          </div>
        </div>
        <h3 className="turnover-total">Tổng doanh thu theo tuần</h3>
        <h2 className="total-number">525.145.000 đồng</h2>
        <Space direction="vertical" size={12} className="total-day">
              <DatePicker
                defaultValue={moment("10/10/2021", dateFormatList[0])}
                format={dateFormatList}
              />
            </Space>
            <h3 className="family-package">Gói gia đình</h3>
            <img src={chart} alt="" className="img-char" />
            <h3 className="event-package">Gói sự kiện</h3>
            <img src={chart1} alt="" className="img-char-1" />
            <h3 className="blue">Vé đã sử dụng</h3>
            <img src={Rectangle2} alt="" className="rectangle" />
            <h3 className="orange">Vé chưa sử dụng</h3>
            <img src={Rectangle} alt="" className="rec" />
            
      </section>
    </>
  );
};

export default HomeMain;
