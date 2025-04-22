import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <div className="w-auto h-auto bg-white">
        <Outlet />
      </div>
    </>
  );
}

export default App;
