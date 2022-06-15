import Menubar from "../../components/Menu/Menu";
import HeaderDetail from "../../components/number/HeaderDetail";
import NumberDetail from "../../components/number/NumberDetail";
const DeviceDetailPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderDetail />
          <NumberDetail />
        </main>
      </div>
    </>
  );
};

export default DeviceDetailPage;
