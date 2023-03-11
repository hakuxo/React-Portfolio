import './App.css';

import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
// import { Projects } from './components/Projects';
// import { Skills } from './components/Skills';
// import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            {/* <Projects />
            <Skills />
            <Contact /> */}
            <Footer />
            <script src="https://kit.fontawesome.com/512153fc2a.js" crossorigin="anonymous"></script>
        </div>
    );
}

export default App;