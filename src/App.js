import React, { useState } from "react";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Contact from "./components/Contact";
import PageScroll from "./components/PageScroll";

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className="App">
      <Main />
      <Profile />
      <Project />
      <Contact
        setCurrentSection={setCurrentSection}  // Contact로 전달
      />

      <PageScroll
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}  // PageScroll 전달
      />
    </div>
  );
}

export default App;
