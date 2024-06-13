import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [user, setUser] = useState([
    {
      username: "Hari",
      password: "123"
    }
  ])
  console.log(user);
  return (
    <>
      <div className="p-16 bg-black App">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Landing></Landing>}></Route>
            <Route path="/" element={<Login user={user} setUser={setUser} />} />
            <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
    </>
  );
}

export default App;
