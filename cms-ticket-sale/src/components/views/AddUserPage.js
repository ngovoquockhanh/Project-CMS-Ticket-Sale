import Menubar from "../../components/Menu/Menu";
import AddUser from "../settings/manageUser/AddUser";
import HeaderAddUser from "../settings/manageUser/HeaderAddUser";
const AddUserPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderAddUser />
          <AddUser />
        </main>
      </div>
    </>
  );
};

export default AddUserPage;
