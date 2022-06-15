import icondropdown from "../../assets/images/icondropdown.png";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import { Pagination } from "antd";
const DeviceMain = () => {
  let navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/device/manage");
  };
  const handleClickDetail = (e) => {
    e.preventDefault();
    navigate("/device/detail");
  };
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
          </div>
          <div className="devicemain-container-table">
            <div className="tbl-header">
              <table cellPadding="0" cellSpacing="0" border="0">
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
              <table cellPadding="0" cellSpacing="0" border="0">
                <tbody>
                  <tr className="col1">
                    <td>1</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      {" "}
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody className="active">
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="green">
                        <span>Hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="green">
                        <span>Kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="col1">
                    <td>KIO_01</td>
                  </tr>
                  <tr className="col2">
                    <td>Kiosk</td>
                  </tr>
                  <tr className="col3">
                    <td>192.168.1.10</td>
                  </tr>
                  <tr className="col4">
                    <td>
                      <li className="red">
                        <span>Ngưng hoạt động</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col5">
                    <td>
                      <li className="red">
                        <span>Mất kết nối</span>
                      </li>
                    </td>
                  </tr>
                  <tr className="col6">
                    <td>
                      Khám tim mạch, khám mắt...
                      <a href="">Xem thêm</a>
                    </td>
                  </tr>
                  <tr className="col7">
                    <td>
                      <a href="" onClick={(e) => handleClickDetail(e)}>
                        Chi tiết
                      </a>
                    </td>
                  </tr>
                  <tr className="col8">
                    <td>
                      <NavLink to="/device/Update" exact="true">
                        Cập nhật
                      </NavLink>
                    </td>
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
