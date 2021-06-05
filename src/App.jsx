import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Routes from "./routes";
import Store from "./store/Store";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </Store>
  );
}

export default App;
