import Menubar from "../Menu/Menu";
import ManagerExpires from "../Manager-ticker/Manager-Expires";


const DevicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap"> 
          <ManagerExpires />
        </main>
      </div>
    </>
  );
};

export default DevicePage;
