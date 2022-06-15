import Menubar from "../../components/Menu/Menu";
import DashboardMain from "../dashboard/DashboardMain";
import HeaderDashboard from "../dashboard/HeaderDashboard";
import OverView from "../Menu/Overview";
const DashboardPage = () => {
  return (
  
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderDashboard />
          <div className="main-wrap-small">
            <DashboardMain />
            <OverView />
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
