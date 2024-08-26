import Sidebar from "../components/Sidebar";
import Navbar from "../components/Sidebar/Navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <Navbar />
      <div className="layout__container">
        <div className="main">
          <div className="main__title">
            <div className="main__title--wrapper">
              <h2>Mon Layout</h2>
            </div>
            <div className="main__title--wrapper">MON SOUS TITRE</div>
          </div>
          <div className="main__container">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
