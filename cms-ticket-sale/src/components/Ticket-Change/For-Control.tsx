import { FiSearch } from "react-icons/fi";
import moment from "moment";
import { Pagination } from "antd";
import { DatePicker, Space } from "antd";
const NoArgumentsMain = () => {
  const { RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";
  const weekFormat = "MM/DD";
  const monthFormat = "YYYY/MM";

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

 
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
            <button className="btn-2">
              <a className="Counterpoint">Chốt đối soát</a>
            </button>
          </div>
          <div className="Checking-container">
            <div className="devicemain-container-table">
              <div className="tbl-control">
                <table >
                  <thead>
                    <tr className="col1">
                      <th className="Checking-col">STT</th>
                    </tr>
                    <tr className="col2-2-2">
                      <th className="Checking-col"> Số Vé</th>
                    </tr>
                    <tr className="col3-3">
                      <th className="Checking-col">Ngày sử dụng</th>
                    </tr>
                    <tr className="col7-7">
                      <th className="Checking-col">Tên loại vé</th>
                    </tr>
                    <tr className="col4-4">
                      <th className="Checking-col">Cổng check-in</th>
                    </tr>
                    <tr className="col4">
                      <th className="Checking-col"></th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content-for">
                <table >
                  <tbody>
                    <tr className="col1">
                      <td>1</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="active">
                    <tr className="col1">
                      <td>2</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="col1">
                      <td>3</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="active">
                    <tr className="col1">
                      <td>4</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="col1">
                      <td>5</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="active">
                    <tr className="col1">
                      <td>6</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="col1">
                      <td>7</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="active">
                    <tr className="col1">
                      <td>8</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr className="col1">
                      <td>9</td>
                    </tr>
                    <tr className="col2-2">
                      <td>205314876321</td>
                    </tr>
                    <tr className="col3-3-3">
                      <td>14/04/2021</td>
                    </tr>
                    <tr className="col4-4-4">
                      <td>
                        <span>Vé cổng</span>
                      </td>
                    </tr>
                    <tr className="col5-5">
                      <td>
                        <span>Cổng 1</span>
                      </td>
                    </tr>
                    <tr className="col6-6">
                      <td>
                        <span className="name-col6">Đã đối soát</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="devicemain-container-pagination">
            <Pagination defaultCurrent={1} total={100} />
          </div>
            </div>
          </div>
        </div>
        <div className="Checking-tickets-left">
          <h3 className="ticket-filter">Lọc vé</h3>
          <div className="filter-main">
            <h3 className="status-filter">Tình trạng đối soát</h3>
            <input type="radio" id="html"className="name-status-filter" name="fav_language" value="HTML"></input>               
                    <span className="status-all">Tất cả</span>
            <input type="radio" id="html"className="name-status-filter-1" name="fav_language" value="HTML"></input>               
                    <span className="status-all-1">Đã đối soát</span>
           <input type="radio" id="html"className="name-status-filter-1" name="fav_language" value="HTML"></input>               
                    <span className="status-all-1">Đã đối soát</span>                
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
