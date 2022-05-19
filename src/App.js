import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Views/Home.js";
import Discuss from "./Views/Discuss.js";
import Browse from "./Views/Browse.js";
import LogIn from "./Views/LogIn.js";
import NoMatch from "./Views/NoMatch.js";
import More from "./Components/MoreComponent.js";
// import Movies from "./Components/Movies";
// import Navigation from "./Components/Navbar";

function App() {
  // <Browse />;

  return (
    <div className="App">
      {/* <Navigation />
      <Movies /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discuss" element={<Discuss />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/:title" element={<More />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
