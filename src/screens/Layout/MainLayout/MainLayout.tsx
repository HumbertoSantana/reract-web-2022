import { Outlet } from "react-router-dom";
import AppFooter from "../../../components/Layout/AppFooter/AppFooter";
import AppHeader from "../../../components/Layout/AppHeader/AppHeader";
import './style.scss';

const MainLayout = () => {
  return(
    <div className="main-layout">
      <div className="header">
        <AppHeader />
      </div>

      <div className="content">
        <Outlet />
      </div>

      <div className="footer">
        <AppFooter />
      </div>
    </div>
  )
}

export default MainLayout;