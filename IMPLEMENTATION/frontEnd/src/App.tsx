import "./App.css";
import { MainRouter } from "./routing";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <MainRouter />
      </Router>
    </>
  );
}

export default App;
