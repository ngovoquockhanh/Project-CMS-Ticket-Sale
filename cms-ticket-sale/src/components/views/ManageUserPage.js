import Menubar from "../../components/Menu/Menu";
import HeaderManageUser from "../../components/settings/manageUser/HeaderManageUser";
import ManageUser from "../../components/settings/manageUser/ManageUser";

const ManageUserPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderManageUser />
          <ManageUser />
        </main>
      </div>
    </>
  );
};

export default ManageUserPage;
