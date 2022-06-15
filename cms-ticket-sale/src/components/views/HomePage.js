import Menubar from "../../components/Menu/Menu";
import Header from "../User/Header";
import Main from "../User/Main";

const HomePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap">
          <Header />
          <Main />
        </main>
      </div>
    </>
  );
};

export default HomePage;
