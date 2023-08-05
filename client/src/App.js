// import { useSelector } from "react-redux";
// import "./App.css";

// import { Navigate, Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Auth from "./pages/authentication/Auth";


// function App() {
//   const user = useSelector((state) => state.authReducer.authData);
//   console.log(user);
//   return (
//     <div className="App">
//       <div className="blur" style={{ top: '-18%', right: '0' }}></div>
//       <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
//       <Routes>
//         <Route
//           path="*"
//           element={user ?  <Home />: <Auth /> }
//         />
//         </Routes>
//       {/* <Profile/>  */}
//     </div>
//   );
// }

// export default App;


// import "./App.css";
// import Auth from "./pages/authentication/Auth";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";


// function App() {
//   return (
//     <div className="App">
//       <div className="blur" style={{ top: '-18%', right: '0' }}></div>
//       <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
//       {/* <Home/> */}
//       {/* <Profile/> */}
//       <Auth/>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Auth from "./pages/authentication/Auth";
import Profile from "./pages/profile/Profile";
import { useSelector } from "react-redux";
// import Chat from "./pages/Chat/Chat";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className="App"
   
    >
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
         <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;