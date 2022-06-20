import Menubar from "../Menu/Menu";
import NoArguments from "../Ticket-Change/No-Arguments";


const DevicePage = () => {
  return (
    <>
      <div className="flex-row">
        <Menubar />
        <main className="main-wrap"> 
          <NoArguments />
        </main>
      </div>
    </>
  );
};

export default DevicePage;
