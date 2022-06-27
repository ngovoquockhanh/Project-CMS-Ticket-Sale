import loc from "../../assets/images/loc.png";
import { FiSearch } from "react-icons/fi";
import moment from "moment";
import Popup from "reactjs-popup";
import { Pagination } from "antd";
import { DatePicker, Space } from "antd";
import { FaCaretRight } from "react-icons/fa";
const DeviceMain = () => {
  const { RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

  
  return (
    <>
      <section className="devicemain">
        <div className="devicemain-container">
          <h2 className="title">Danh sách bán vé</h2>
          <div className="flex-box">
            <div className="devicemain-container-box">
              <div className="search">
                <input type="text" placeholder="Tìm bảng số vé" />
                <span>
                  <FiSearch />
                </span>
              </div>
            </div>
            <Popup
              modal
              trigger={
                <button className="btn">
                  <a className="ticket-filter">Lọc Vé</a>
                  <img src={loc} alt="" className="loc" />
                </button>
              }
            >
              <div className="filter">
                <h3 className="name-ticket">Lọc Vé</h3>

                <Space direction="vertical" size={12} className="date-day">
                  <h3 className="day-name">Từ Ngày</h3>
                  <DatePicker
                    defaultValue={moment("10/10/2021", dateFormatList[0])}
                    format={dateFormatList}
                  />
                </Space>
                <span>
                  <FaCaretRight />
                </span>
                <h3 className="day-name-1">Đến Ngày</h3>
                <Space direction="vertical" size={12} className="date-day-1">
                  <DatePicker
                    defaultValue={moment("18/10/2021", dateFormatList[0])}
                    format={dateFormatList}
                  />
                </Space>
                <div>
                <h3 className="statust">Tình trạng sử dụng</h3>
                <input type="radio" id="html"className="name-all" name="fav_language" value="HTML"></input>               
                    <span className="all">Tất cả</span>
                   <input type="radio" id="html" className="name-all-1" name="fav_language"  value="HTML"></input>
                    <span className="all-1">Đã sử dụng</span>
                    <input type="radio" id="html" className="name-all-2" name="fav_language"  value="HTML"></input>
                    <span className="all-2">Chưa sử dụng</span>
                    <input type="radio" id="html" className="name-all-3" name="fav_language"  value="HTML"></input>
                    <span className="all-3">Hết hạn</span>
            
                </div>
              <div>
              <h3 className="check">Cổng Check - in</h3>
              <input type="checkbox" id="" className="check-all" />
               <span className="check-name">Tất cả</span>
               <input type="checkbox" id="" className="check-all-1" />
               <span className="check-name-1">Cổng 3</span>
               <input type="checkbox" id="" className="check-all-2" />
               <span className="check-name-2">Cổng 1</span>
               <input type="checkbox" id="" className="check-all-3" />
               <span className="check-name-3">Cổng 4</span>
               <input type="checkbox" id="" className="check-all-4" />
               <span className="check-name-4">Cổng 2</span>
               <input type="checkbox" id="" className="check-all-5" />
               <span className="check-name-5">Cổng 5</span>
              </div>
              <button className="name-filter"><span className="name-filter-1">Lọc</span></button>
              </div>
  
            </Popup>

            <button className="btn-1">
              <a className="export-file">Xuất file(.csv)</a>
            </button>
          </div>

          <div className="devicemain-container-table">
            <div className="tbl-header">
              <table>
                <thead>
                  <tr className="col1">
                    <th className="name-col">STT</th>
                  </tr>
                  <tr className="col2">
                    <th className="name-col"> Booking Code</th>
                  </tr>
                  <tr className="col3">
                    <th className="name-col">Số Vé</th>
                  </tr>
                  <tr className="col4">
                    <th className="name-col">Tên sự kiện</th>
                  </tr>
                  <tr className="col5">
                    <th className="name-col">Tình trạng sử dụng</th>
                  </tr>
                  <tr className="col6">
                    <th className="name-col">Ngày sử dụng</th>
                  </tr>
                  <tr className="col7">
                    <th className="name-col">Ngày xuất vé</th>
                  </tr>
                  <tr className="col8">
                    <th className="name-col">Cổng ckeck-in</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="tbl-content">
              <table >
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
                      <li className="red-2">
                        <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
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
                      <li className="green-2">
                                     <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
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
                      <li className="red-2">
                                     <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
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
                      <li className="green-2">
                                     <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
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
                      <li className="red-2">
                                     <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
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
                      <li className="green-2">
                                     <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
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
                      <li className="red-2">
                                     <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
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
                      <li className="green-2">
                                     <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
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
                      <li className="red-2">
                                     <span className="expires">Hết hạn</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col7">
                    <td>14/04/2021</td>
                  </tr>
                  <tr className="col8">
                    <td>Cổng 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="devicemain-container-pagination">
            <Pagination defaultCurrent={1} total={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DeviceMain;
