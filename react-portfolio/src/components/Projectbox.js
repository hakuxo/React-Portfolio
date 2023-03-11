import { Col } from "react-bootstrap";

export const Projectbox = ({ title, description, imgUrl }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="img-box">
                <img src={imgUrl} />
                <div className="card-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}