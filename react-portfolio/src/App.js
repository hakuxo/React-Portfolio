import './App.css';

import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
// import { Projects } from './components/Projects';
// import { Skills } from './components/Skills';
// import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faLinkedIn, faDiscord, } from '@fortawesome/free-brands-svg-icons'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

  library.add(fab, faGithub, faLinkedIn, faDiscord, faCircleArrowRight )



function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            {/* <Projects />
            <Skills />
            <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;