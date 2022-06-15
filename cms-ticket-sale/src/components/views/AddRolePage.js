import Menubar from "../../components/Menu/Menu";
import HeaderAddRole from "../settings/manageRole/HeaderAddRole";
import AddRole from "../settings/manageRole/AddRole";
const AddRolePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderAddRole />
          <AddRole />
        </main>
      </div>
    </>
  );
};

export default AddRolePage;
