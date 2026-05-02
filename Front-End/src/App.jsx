import Ticket from "./Components/Ticket"
import './App.css'
import Register from "./Pages/Register/Register"
import Login from './Pages/Login/Login'

function App() {
  const TicketObj={
           title :"system error",
           status:"open"
  }
  return (
    <>
    <Register />
    <Ticket title = {TicketObj.title} status = {TicketObj.status}/>
      <Login />
    </>
  )
}

export default App