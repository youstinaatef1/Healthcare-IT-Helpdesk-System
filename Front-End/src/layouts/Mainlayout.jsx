import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function MainLayout() {

  const [isDraft, setIsDraft] = useState(false);

  return (
    <div style={{ display: "flex" }}>

      <Sidebar isDraft={isDraft} />

      <div style={{ marginLeft: "240px", width: "100%" }}>

        <Navbar />

        <main style={{ minHeight: "calc(100vh - 120px)", padding: "20px" }}>
          
          {/* هنا هنمرر setIsDraft لكل الصفحات */}
          <Outlet context={{ setIsDraft }} />

        </main>

        <Footer />

      </div>

    </div>
  );
}

export default MainLayout;