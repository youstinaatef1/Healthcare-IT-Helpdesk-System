import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Tickets from "./Pages/Tickets/Tickets";
import Users from "./Pages/Users/Users";
import Reports from "./Pages/Reports/Reports";
import Settings from "./Pages/Setting/Settings";
import Ticket from "./Components/Ticket";
import MainLayout from "./layouts/Mainlayout";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="ticket"
            element={<Ticket title="system error" status="open" />}
          />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;