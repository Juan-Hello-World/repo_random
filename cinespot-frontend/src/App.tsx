import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { useAuth } from "./hooks/useAuth"
import Movies from "./pages/Movies";

function App() {

  const {user} = useAuth();
  return(
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        <Route path="/movies/:categoryId" element={user ? <Movies /> : <Navigate to="/login" replace/>} />
      </Routes>

    </>
  )
}

export default App
