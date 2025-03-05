
import './styles/App.css'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import { PROJECTLIST } from './config/constants';
import ContactForm from './pages/ContactMe';
import Footer from './pages/Footer';


function App() {

  return (
    <>
      <Navbar />
      <div style={{
        marginLeft: 200,
        marginRight: 200
      }}>
        <Home />
      </div>
      <div>
        <AboutMe />
        <Projects  projects={PROJECTLIST}/>
        <ContactForm/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
