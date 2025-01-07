import logo from "./logo.svg";
import "./App.css";
import LabTabs from "./components/LabTabs";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Container>
        <LabTabs />
      </Container>
    </div>
  );
}

export default App;
