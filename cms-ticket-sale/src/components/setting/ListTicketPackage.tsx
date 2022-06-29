import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { Pagination } from "antd";
import ModalUpdate from "../setting/ModalUpdate";
import ModalAdd from "../setting/ModalAdd";
const ListTicketPackage: React.FC = () => {
  const [openModalUpdate, setOpenModalUpdate] = useState<boolean>(false);
  const [openModalAdd, setOpenModalAdd] = useState<boolean>(false);
  return (
    <>
      <section className="list-ticket-package">
        <div className="list-ticket-package-main">
          <h3 className="ticket-list">Danh sách vé</h3>
          <div className="list-ticket-package-main-func">
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
            <div className="list-ticket-package-main-func-add-export">
              <div className="btn-7">
            
                <h3 className="export-1">Xuất file (.csv)</h3>
              </div>
              <div
                className="btn-8"
                onClick={() => setOpenModalAdd(true)}
              >
  
                <h3 className="name-package">Thêm gói vé</h3>
              </div>
              {openModalAdd && <ModalAdd closeModalAdd={setOpenModalAdd} />}
            </div>
          </div>

          <div className="list-ticket-package-main-table">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th>STT</th>
                  <th>Mã gói</th>
                  <th>Tên gói vé</th>
                  <th>Ngày áp dụng</th>
                  <th>Ngày hết hạn</th>
                  <th>Giá vé (VNĐ/Vé)</th>
                  <th>Giá Combo (VNĐ/Combo)</th>
                  <th>Tình trạng</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>ALT20210501</td>
                  <td>Gói gia đình</td>
                  <td>
                    <p>14/04/2021</p>
                    <p>23:00:00</p>
                  </td>
                  <td>
                    <p>14/04/2021</p>
                    <p>08:00:00</p>
                  </td>
                  <td>90.000 VNĐ</td>
                  <td>360.000 VNĐ/4 Vé</td>
                  <td>
                    <li className="li-dad">Đang áp dụng</li>
                  </td>
                  <td>
                    <span>
                      <FiEdit />
                    </span>
                    <span onClick={() => setOpenModalUpdate(true)}>
                      Cập nhật
                    </span>
                  </td>
                </tr>
                {openModalUpdate && (
                  <ModalUpdate closeModalUpdate={setOpenModalUpdate} />
                )}
                <tr>
                  <td>2</td>
                  <td>ALT20210501</td>
                  <td>Gói sự kiện</td>
                  <td>
                    <p>14/04/2021</p>
                    <p>23:00:00</p>
                  </td>
                  <td>
                    <p>14/04/2021</p>
                    <p>08:00:00</p>
                  </td>
                  <td>20.000 VNĐ</td>
                  <td>-</td>
                  <td>
                    <li className="li-tat">Tắt</li>
                  </td>
                  <td>
                    <span>
                      <FiEdit />
                    </span>
                    <span>Cập nhật</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="list-ticket-package-main-pagination">
            <Pagination defaultCurrent={1} total={200} />
          </div>
        </div>
      </section>
    </>
  );
};
export default ListTicketPackage;
