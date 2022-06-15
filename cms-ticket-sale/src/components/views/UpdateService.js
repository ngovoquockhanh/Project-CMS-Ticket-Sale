import Menubar from "../../components/Menu/Menu";
import HeaderUpdate from "../../components/service/HeaderUpdate";
import UpdateService from "../../components/service/UpdateService";

const ServicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderUpdate />
          <UpdateService />
        </main>
      </div>
    </>
  );
};

export default ServicePage;
