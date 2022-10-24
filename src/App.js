import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <div className="geral">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
