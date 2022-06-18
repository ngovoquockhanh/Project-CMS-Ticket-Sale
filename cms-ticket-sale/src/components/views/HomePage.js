import Menubar from "../Menu/Menu";
import Homepage from "../Home-page/Home-page";


const HomePage  = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap"> 
          <Homepage />
        </main>
      </div>
    </>
  );
};

export default HomePage;
