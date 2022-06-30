import { FiSearch } from "react-icons/fi";
import moment from "moment";
import { Pagination } from "antd";
import data from "../data/dataTicket";
import { DatePicker, Space } from "antd";
import React, { useState } from "react";
const NoArgumentsMain = () => {
  const { RangePicker } = DatePicker;
  const [items, setItems] = useState(data);
  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const ChangeTicket = (id: string) => {
    const checktatca: any = document.getElementById("checktatca");
    const checkdadoisoat: any = document.getElementById("checkdadoisoat");
    const checkchuadoisoat: any = document.getElementById("checkchuadoisoat");
    const chotdoisoat: any = document.getElementById("chotdoisoat");
    const xuatfile: any = document.getElementById("xuatfile");
   
    if (chotdoisoat.style.display === "none") {
      chotdoisoat.style.display = "flex";
      xuatfile.style.display = "none";
    } else {
      chotdoisoat.style.display = "none";
      xuatfile.style.display = "flex";
    }

    checktatca.checked = false;
    checkdadoisoat.checked = false;
    checkchuadoisoat.checked = false;
    const checkon: any = document.getElementById(id);
    checkon.checked = true;
  };
  const handleFilter = (actionItem: string) => {
    const updateItems = data.filter((curElem) => {
      return curElem.action === actionItem;
    });
    setItems(updateItems);
  };
 
  return (
    <>
      <section className="NoArgumentsMain">
        <div className="Checking-tickets-right">
          <h3 className="For-control">Đối soát vé</h3>
          <div className="search-control">
            <input
              className="name-search"
              type="text"
              placeholder="Tìm bảng số vé"
            />
            <span>
              <FiSearch />
            </span>
           
          </div>
          <div className="list-ticket-change-main-func">
                   
                    <div className="list-ticket-change-main-func-filter-export">
                      <div
                        className="list-ticket-change-filter btn save"
                        id="chotdoisoat"
                      >
                        <p>Chốt đổi soát</p>
                      </div>
                      <div
                        className="list-ticket-change-filter btn "
                        id="xuatfile"
                      >
                        <p>Xuất file</p>
                      </div>
                    </div>
                  </div>
                  <div className="list-ticket-change-main-table">
                    <table className="table">
                      <thead className="thead">
                        <tr>
                          <th>STT</th>
                          <th>Số vé</th>
                          <th>Tên sự kiện</th>
                          <th>Ngày sử dụngg</th>
                          <th>Loại vé</th>
                          <th>Cổng check - in</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {items &&
                          items.map((item) => {
                            return (
                              <tr>
                                <td>{item.id}</td>
                                <td>{item.sove}</td>
                                <td>{item.tensukien}</td>
                                <td>{item.ngaysudung}</td>
                                <td>{item.loaive}</td>
                                <td>{item.congcheckin}</td>
                                <td>
                                  {item.used === true ? (
                                    <span style={{ color: "red" }}>
                                      {item.action}
                                    </span>
                                  ) : (
                                    <span>{item.action}</span>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                  <div className="list-ticket-change-main-pagination">
                    <Pagination defaultCurrent={1} total={200} />
                  </div>
        </div>
        <div className="Checking-tickets-left">
          <h3 className="ticket-filter">Lọc vé</h3>
          <div className="filter-main">
            <h3 className="status-filter">Tình trạng đối soát</h3>
      
            <input type="radio" className="name-status-filter"  id="checktatca"                        
                          onClick={() => setItems(data)}
                          onChange={() => ChangeTicket("checktatca")}></input>               
                    <span className="status-all">Tất cả</span>
            <input
                          type="radio"
                          name="fav_language"
                          id="checkdadoisoat"
                          className="name-status-filter-1"
                          onClick={() => handleFilter("Đã đổi soát")}
                          onChange={() => ChangeTicket("checkdadoisoat")}
                        />          
                    <span className="status-all-1">Đã đối soát</span>
           <input type="radio"    id="checkchuadoisoat"className="name-status-filter-1" name="fav_language" onClick={() => handleFilter("Chưa đổi soát")}
                          onChange={() => ChangeTicket("checkchuadoisoat")}></input>               
                    <span className="status-all-1">Chưa đối soát</span>                
          </div>
          <div className="ticket-type">
                <h3 className="name-ticket-type">Loại vé</h3>
                <h3 className="name-gate-ticket">Vé cổng</h3>
          </div>
          <div className="since">
            <h3 className="name-since">Từ ngày</h3>
            <Space direction="vertical" size={12} className="date-since">
      
                  <DatePicker
                    defaultValue={moment("10/10/2021", dateFormatList[0])}
                    format={dateFormatList}
                    dropdownClassName="dropdown-class-name-cs"
                  />
                </Space>
                <h3 className="until-the-day">Đến ngày</h3>
            <Space direction="vertical" size={12} className="date-until">
      
                  <DatePicker
                    defaultValue={moment("10/10/2021", dateFormatList[0])}
                    format={dateFormatList}
                    dropdownClassName="dropdown-class-name-cs"
                  />
                </Space>

          </div>
          <button className="btn-3">
              <a className="filter-arguments">Lọc</a>
            </button>
        </div>
      </section>
    </>
  );
};

export default NoArgumentsMain;
