
import './styles/App.css'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/projects';
import { PROJECTLIST } from './config/constants';


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
      <div
        style={{
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <AboutMe />
      </div>
      <div>
        <Projects  projects={PROJECTLIST}/>
      </div>
    </>
  )
}

export default App
