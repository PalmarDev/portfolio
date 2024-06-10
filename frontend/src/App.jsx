import { HashRouter, Routes, Route } from "react-router-dom";
import * as Imports from "./Imports";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Imports.Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
