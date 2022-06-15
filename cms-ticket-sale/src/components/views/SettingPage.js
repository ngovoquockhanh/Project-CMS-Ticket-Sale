import Menubar from "../../components/Menu/Menu";
import HeaderSetting from "../../components/settings/manageRole/HeaderSetting";
import SettingMain from "../../components/settings/manageRole/SettingMain";

const SettingPage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <HeaderSetting />
          <SettingMain />
        </main>
      </div>
    </>
  );
};

export default SettingPage;
