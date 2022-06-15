import Menubar from "../../components/Menu/Menu";
import HeaderDetail from "../settings/manageRole/HeaderDetail";
import RoleDetail from "../settings/manageRole/RoleDetail";
const AddRolePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderDetail />
          <RoleDetail />
        </main>
      </div>
    </>
  );
};

export default AddRolePage;
