import Menubar from "../Menu/Menu";
import Managernotused from "../Manager-ticker/Manager-not-used";


const DevicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap"> 
          <Managernotused />
        </main>
      </div>
    </>
  );
};

export default DevicePage;
