import { useEffect } from "react";
import "./App.css";
import About from "./components/About/about.component";
import ContactForm from "./components/Contact Form/contact-form.component";
import DataEnthusiast from "./components/DataEnthusiast/data_enthusiast.component";
import Footer from "./components/Footer/footer.component";
import Main from "./components/Main/main.component";
import Projects from "./components/Projects/projects.component";
import TestCarousel from "./components/Projects/test";
import Skills from "./components/Skills/skills.component";
import ThemeToggle from "./components/ThemeToggle/toggle.component";
import Timeline from "./components/Timeline/timeline.component";
import "./resources/global.styles.css";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <ThemeToggle />
      <Main />
      <About />
      <Timeline />
      <Skills />
      <TestCarousel />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
