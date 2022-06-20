import loc from "../../assets/images/loc.png";
import { FiSearch } from "react-icons/fi";
import moment from "moment";
import Popup from "reactjs-popup";
import { Pagination } from "antd";
import { DatePicker, Space } from "antd";
import { FaCaretRight } from "react-icons/fa";
const NoArgumentsMain = () => {
  const { RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
  return (
    <>
      <section className="NoArgumentsMain">
        <div className="Checking-tickets-right">
              <h3 className="For-control">Đối soát vé</h3>
              <div className="search-control">
                <input className="name-search" type="text" placeholder="Tìm bảng số vé" />
                <span>
                  <FiSearch />
                </span>
              </div>
              <div className="Checking-container">
                

              <div className="devicemain-container-table">
            <div className="tbl-control">
              <table cellPadding="0" cellSpacing="0" border="0">
                <thead>
                  <tr className="col1">
                    <th className="name-col">STT</th>
                  </tr>
                  <tr className="col2">
                    <th className="name-col"> Số Vé</th>
                  </tr>
                  <tr className="col3">
                    <th className="name-col">Ngày sử dụng</th>
                  </tr>
                  <tr className="col4">
                    <th className="name-col">Tên loại vé</th>
                  </tr>
                  <tr className="col4">
                    <th className="name-col">Cổng check-in</th>
                  </tr>
                  
                 
                </thead>
              </table>
            </div>
            <div className="tbl-content-for">
              <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr className="col1">
                    <td>1</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>
                 
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>2</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>
                 
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>3</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>
               
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>4</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>
               
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>5</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>
                
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>6</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>
               
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>7</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>
             
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>8</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>

                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>9</td>
                  </tr>
                  <tr className="col2">
                    <td>ALT20210501</td>
                  </tr>
                  <tr className="col3">
                    <td>123456789034</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <span>Hội chợ triển lãm tiêu dùng 2021</span>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Đã sử dụng</span>
                      </li>
                    </td>
                  </tr>
               
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
        <div className="Checking-tickets-left">

        </div>
      </section>
    </>
  );
};

export default NoArgumentsMain;
