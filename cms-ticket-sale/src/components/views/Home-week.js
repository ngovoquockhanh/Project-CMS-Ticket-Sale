import Menubar from "../Menu/Menu";
import Homeweek from "../Home-page/Home-week";


const HomePage  = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap"> 
          <Homeweek />
        </main>
      </div>
    </>
  );
};

export default HomePage;
