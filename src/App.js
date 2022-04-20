import { useSelector } from "react-redux";
import { Routes, BrowserRouter as Router, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import "antd/dist/antd.css";
import Post from "./Components/Post/Post";

function App() {
  const { isAuth } = useSelector((state) => state.user);

  const isAuthCheck = (data) => {
    if (isAuth) {
      return data;
    }
    return <Navigate to="/" /> ;
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/post" element={isAuthCheck(<Post />)} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
