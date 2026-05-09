import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function MainLayout() {
  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ marginLeft: "240px", width: "100%" }}>

        <Navbar />

        <main style={{ minHeight: "calc(100vh - 120px)", padding: "20px" }}>
          <Outlet />
        </main>

        <Footer />

      </div>

    </div>
  );
}

export default MainLayout;