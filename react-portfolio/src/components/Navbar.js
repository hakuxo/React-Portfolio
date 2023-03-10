import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// useState and useEffect are from react and are hook that allows us to add functionality
import { useState, useEffect } from "react";

export const NavBar = () => {
    // Allows us to determine if user has scrolled
    const [ activeLink, setActiveLink ] = useState('home');
    const [ scrolled, seScrolled ] = useState(false);
    // If the user has scrolled atleast 50, it will pick up that the user has and will be set to true! if not... it stays the same and continues as false
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        
        window.addEventListener("scroll", onScroll);
        // Removes event listener when passed or scrolled away from original scroll point
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    // React Bootstrap navbar without the dropdown
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="pic of something" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#Home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#Projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#Skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            </Nav>
                <span className='navbar-text'>
                    <div className='socials'>
                        <a href='https://www.linkedin.com/in/jillian-hallmark-026648259/'><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                        <a href='https://github.com/hakuxo'><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                        <a href='https://discordapp.com/users/247509558883385345'><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                    </div>
                    <button className='' onClick={() => console.log('connect')}> 
                        <span>Connections</span> 
                    </button>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Navbar;