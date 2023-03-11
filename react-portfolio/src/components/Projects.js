import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Projectbox } from "./Projectbox";
import Img1 from "../assets/images/Kawaii-Aesthetic-Drawing-Beautiful-Art.jpg";
import 'animate.css';

export const Projects = () => {

    const projects = [

        {
        title:"Currency Convertor" ,
        description: "Convert currency in the click of a button!" ,
        imgUrl: Img1,
        },
        {
        title:"reLease Me" ,
        description:"A website build and desgined to help students find living spaces or lease theirs out!" ,
        imgUrl: Img1, 
        },
        {
        title:"Password Generator" ,
        description:"Generate a non-copyable password!" ,
        imgUrl: Img1,
        },
        {
        title:"Professional ReadMe" ,
        description:"Generates a professional read me easily for your projects!" ,
        imgUrl: Img1, 
        },
    ];
    return (

    )
}