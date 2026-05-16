// import styles from "./Dashboard.module.css";
// import {
//   BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   PieChart, Pie, Cell, Legend
// } from "recharts";

// const barData = [
//   { month: "Jan", tickets: 8 },
//   { month: "Feb", tickets: 14 },
//   { month: "Mar", tickets: 10 },
//   { month: "Apr", tickets: 18 },
//   { month: "May", tickets: 11 },
//   { month: "Jun", tickets: 15 },
// ];

// const pieData = [
//   { name: "Open",       value: 4 },
//   { name: "In Progress",value: 5 },
//   { name: "Closed",     value: 2 },
// ];

// const PIE_COLORS = ["#3b82f6", "#f59e0b", "#10b981"];

// const emergencyTickets = [
//   { id: "#T-1004", subject: "ICU system failure",      department: "ICU" },
//   { id: "#T-1005", subject: "Patient monitor offline",  department: "Cardiology" },
//   { id: "#T-1006", subject: "Lab results not loading",  department: "Pathology" },
// ];

// function Dashboard() {
//   const [isDraft, setIsDraft] = useState(false);
//   return (
//     <div className={styles.dashboard}>

//       <div className={styles.header}>
//         <h1>Dashboard</h1>
//         <p>Welcome back, Admin 👋</p>
//       </div>

   
//       <div className={styles.cards}>

//         <div className={styles.card}>
//           <h3>Total Tickets</h3>
//           <p>11</p>
//         </div>

//         <div className={styles.card}>
//           <h3>Open Tickets</h3>
//           <p>4</p>
//         </div>

//         <div className={styles.card}>
//           <h3>Closed Tickets</h3>
//           <p>2</p>
//         </div>

//         <div className={styles.card}>
//           <h3>Active Users</h3>
//           <p>12</p>
//         </div>

//       </div>

//       <div className={styles.section}>
//         <h2>Recent Tickets</h2>

//         <div className={styles.table}>
//           <div className={styles.row}>
//             <span>#T-1001</span>
//             <span>Login issue</span>
//             <span>Open</span>
//           </div>

//           <div className={styles.row}>
//             <span>#T-1002</span>
//             <span>Network problem</span>
//             <span>Closed</span>
//           </div>

//           <div className={styles.row}>
//             <span>#T-1003</span>
//             <span>System crash</span>
//             <span>Open</span>
//           </div>
//         </div>

//       </div>

//       {/* ── Emergency Mode ── */}
//       <div className={styles.emergencySection}>
//         <div className={styles.emergencyHeader}>
//           <span className={styles.emergencyDot} />
//           <h2 className={styles.emergencyTitle}>🚨 Emergency — High Priority Tickets</h2>
//         </div>
//         <div className={styles.emergencyTable}>
//           {emergencyTickets.map((t) => (
//             <div key={t.id} className={styles.emergencyRow}>
//               <span className={styles.emergencyId}>{t.id}</span>
//               <span className={styles.emergencySubject}>{t.subject}</span>
//               <span className={styles.emergencyDept}>{t.department}</span>
//               <span className={styles.emergencyBadge}>Critical</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Analytics Charts ── */}
//       <div className={styles.chartsGrid}>

//         <div className={styles.chartCard}>
//           <h2 className={styles.chartTitle}>Tickets per Month</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={barData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//               <XAxis dataKey="month" tick={{ fontSize: 12 }} />
//               <YAxis tick={{ fontSize: 12 }} />
//               <Tooltip />
//               <Bar dataKey="tickets" fill="#3b82f6" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         <div className={styles.chartCard}>
//           <h2 className={styles.chartTitle}>Ticket Status Breakdown</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%" cy="50%"
//                 innerRadius={60} outerRadius={90}
//                 paddingAngle={4}
//                 dataKey="value"
//               >
//                 {pieData.map((_, i) => (
//                   <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Dashboard;
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import styles from "./Dashboard.module.css";

import User from "../Users/Users";
import Ticket from "../Tickets/Tickets";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

// ── Charts Data ──
const barData = [
  { month: "Jan", tickets: 8 },
  { month: "Feb", tickets: 14 },
  { month: "Mar", tickets: 10 },
  { month: "Apr", tickets: 18 },
  { month: "May", tickets: 11 },
  { month: "Jun", tickets: 15 },
];

const pieData = [
  { name: "Open", value: 4 },
  { name: "In Progress", value: 5 },
  { name: "Closed", value: 2 },
];

const PIE_COLORS = ["#3b82f6", "#f59e0b", "#10b981"];

const emergencyTickets = [
  { id: "#T-1004", subject: "ICU system failure", department: "ICU" },
  { id: "#T-1005", subject: "Patient monitor offline", department: "Cardiology" },
  { id: "#T-1006", subject: "Lab results not loading", department: "Pathology" },
];

function Dashboard() {
  const [isDraft, setIsDraft] = useState(false);

  return (
    <Routes>

      {/* ───────── HOME DASHBOARD ───────── */}
      <Route
        path="/"
        element={
          <div className={styles.dashboard}>

            <div className={styles.header}>
              <h1>Dashboard</h1>
              <p>Welcome back, Admin 👋</p>
            </div>

            {isDraft && (
              <div className="alert alert-warning">
                Draft
              </div>
            )}

            {/* ── Cards ── */}
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>Total Tickets</h3>
                <p>11</p>
              </div>

              <div className={styles.card}>
                <h3>Open Tickets</h3>
                <p>4</p>
              </div>

              <div className={styles.card}>
                <h3>Closed Tickets</h3>
                <p>2</p>
              </div>

              <div className={styles.card}>
                <h3>Active Users</h3>
                <p>12</p>
              </div>
            </div>

            {/* ── Recent Tickets ── */}
            <div className={styles.section}>
              <h2>Recent Tickets</h2>

              <div className={styles.table}>
                <div className={styles.row}>
                  <span>#T-1001</span>
                  <span>Login issue</span>
                  <span>Open</span>
                </div>

                <div className={styles.row}>
                  <span>#T-1002</span>
                  <span>Network problem</span>
                  <span>Closed</span>
                </div>

                <div className={styles.row}>
                  <span>#T-1003</span>
                  <span>System crash</span>
                  <span>Open</span>
                </div>
              </div>
            </div>

            {/* ── Emergency Section ── */}
            <div className={styles.emergencySection}>
              <div className={styles.emergencyHeader}>
                <span className={styles.emergencyDot} />
                <h2 className={styles.emergencyTitle}>
                  🚨 Emergency — High Priority Tickets
                </h2>
              </div>

              <div className={styles.emergencyTable}>
                {emergencyTickets.map((t) => (
                  <div key={t.id} className={styles.emergencyRow}>
                    <span className={styles.emergencyId}>{t.id}</span>
                    <span className={styles.emergencySubject}>{t.subject}</span>
                    <span className={styles.emergencyDept}>{t.department}</span>
                    <span className={styles.emergencyBadge}>Critical</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Charts ── */}
            <div className={styles.chartsGrid}>

              <div className={styles.chartCard}>
                <h2 className={styles.chartTitle}>Tickets per Month</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="tickets" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className={styles.chartCard}>
                <h2 className={styles.chartTitle}>Ticket Status</h2>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      dataKey="value"
                    >
                      {pieData.map((_, i) => (
                        <Cell key={i} fill={PIE_COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

            </div>

          </div>
        }
      />

      {/* ───────── USERS ───────── */}
      <Route
        path="/users"
        element={<User setIsDraft={setIsDraft} />}
      />

      {/* ───────── TICKETS ───────── */}
      <Route
        path="/tickets"
        element={<Ticket setIsDraft={setIsDraft} />}
      />

    </Routes>
  );
}

export default Dashboard;