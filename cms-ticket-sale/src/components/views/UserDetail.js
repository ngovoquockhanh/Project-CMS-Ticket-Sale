import Menubar from "../../components/Menu/Menu";
import UserDetail from "../settings/manageUser/UserDetail";
import HeaderDetail from "../settings/manageUser/HeaderDetail";
const AddUserPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderDetail />
          <UserDetail />
        </main>
      </div>
    </>
  );
};

export default AddUserPage;
