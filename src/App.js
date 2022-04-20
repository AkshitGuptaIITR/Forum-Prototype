import { useSelector } from 'react-redux';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import "antd/dist/antd.css";

function App() {
  const { isAuth } = useSelector(state => state.user)

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
