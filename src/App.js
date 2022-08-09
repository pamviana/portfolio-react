import "./App.css";
import About from "./components/About/about.component";
import ContactForm from "./components/Contact Form/contact-form.component";
import DataEnthusiast from "./components/DataEnthusiast/data_enthusiast.component";
import Footer from "./components/Footer/footer.component";
import Main from "./components/Main/main.component";
import Projects from "./components/Projects/projects.component";
import Skills from "./components/Skills/skills.component";
import Timeline from "./components/Timeline/timeline.component";
import './resources/global.styles.css';


function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Timeline />
      <Projects/>
      <Skills/>
      <DataEnthusiast/>
      <ContactForm/>      
      {/*<div className="footer-mask"></div>*/}
      <Footer />
    </div>
  );
}

export default App;
