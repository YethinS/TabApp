import logo from "./logo.svg";
import "./App.css";
import LabTabs from "./components/LabTabs";
import { Container } from "@mui/system";
import { lazy } from "react";

function App() {
  const tabItems = ['PROFILE','MESSAGES',  'SETTINGS' ]
  const tabContents = ['Profile Content', 'Message Content', 'Settings Content']
  return (
    <div className="App">
      <Container>
        <LabTabs tabItems={tabItems} tabContents={tabContents} />
      </Container>
    </div>
  );
}

export default App;
