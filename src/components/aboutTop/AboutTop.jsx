import "./aboutTop.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import purple from "..//..//assets/images/purplebg.png";
import white from "..//..//assets/images/whitebg.png";
import nurse from "../../assets/images/nurse.png";

function AboutTop() {
    return (
        <div className="about-upper">
            <div className="about-logo">
                <img src={logo} alt="" />
                <Link to="/">WeHealthy</Link>
            </div>

            <div className="about-content">

                <div className="content-text">
                    <h3>Our Mission</h3>
                    <h1>We Connect You With The Best Doctors</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link to="/features/authentication/signup">Join Us</Link>
                </div>

                <div className="content-graphic">
                    <div className="graphic-container">
                        <div className="white-bg">
                            <img src={white} alt="" />
                        </div>
                        <div className="purple-bg">
                            <img src={purple} alt="" />   
                        </div>
                        <img src={nurse} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutTop;