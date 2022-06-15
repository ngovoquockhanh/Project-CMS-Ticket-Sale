import Menubar from "../../components/Menu/Menu";
import HeaderReport from "../report/HeaderReport";
import ReportMain from "../report/ReportMain";
const ReportPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderReport />
          <ReportMain />
        </main>
      </div>
    </>
  );
};

export default ReportPage;
