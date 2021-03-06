import loc from "../../assets/images/loc.png";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { Pagination } from "antd";
import { DatePicker } from "antd";
import ModalFilter from "../Manager-ticker/ModalFilter";
const DeviceMain = () => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalChangeTicket, setOpenModalChangeTicket] =
    useState<boolean>(false);
  
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
            
            <div className="filter-export">
              <div
                className=" btn-4"
                onClick={() => setOpenModal(true)}
              >
                 <img src={loc} alt="" className="ticket-filter-img" />
                <h3 className="ticket-filter">Lọc Vé</h3>
              </div>
              <div className="btn-5">
                <h3 className="ticket-filter-1">Xuất file (.csv)</h3>
              </div>
            </div>
          </div>
          {openModal && <ModalFilter closeModal={setOpenModal} />}
          <div className="devicemain-container-table">
            <div className="tbl-header">
              <table >
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
                      <li className="red">
                        <span>Đã sử dụng</span>
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
                      <li className="green">
                        <span>Đã sử dụng</span>
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
                      <li className="red">
                        <span>Đã sử dụng</span>
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
                      <li className="green">
                        <span>Đã sử dụng</span>
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
                      <li className="red">
                        <span>Đã sử dụng</span>
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
                      <li className="green">
                        <span>Đã sử dụng</span>
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
                      <li className="red">
                        <span>Đã sử dụng</span>
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
                      <li className="green">
                        <span>Đã sử dụng</span>
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
                      <li className="red">
                        <span>Đã sử dụng</span>
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
