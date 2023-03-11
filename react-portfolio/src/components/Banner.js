import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react";
import dogo from '../assets/images/doggooo.png'


export const Banner = () => {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = [ "Full-Stack Web Dev", "Web Designer", "Gamer" ];
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
    }, delta )
    return () => { clearInterval(ticker) };
}, {text})

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
        setDelta(prevDelta => prevDelta /2)
    }

    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }

}


    return (
        <secton className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hello My name is Jillian`}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full-Stack Web Dev", "Web Designer", "Gamer" ]'><span className="wrap">{text}</span></span></h1>
                        <p>Despite what your teacher may have told you, there is a wrong way to wield a lasso.Despite what your teacher may have told you, there is a wrong way to wield a lasso.Despite what your teacher may have told you, there is a wrong way to wield a lasso.Despite what your teacher may have told you, there is a wrong way to wield a lasso.</p>
                        <button onClick={() => console.log('connect')}>Connect with me!<i class="fa-solid fa-circle-chevron-right fa-xl"></i></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={dogo} alt="dogoooo" />
                    </Col>
                </Row>
            </Container>
            <script src="https://kit.fontawesome.com/512153fc2a.js" crossorigin="anonymous"></script>
        </secton>
    )
}

export default Banner;