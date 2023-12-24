import "./whyus.scss";
import ladyImage from "../../assets/images/mainimglady.png";
import CtaButton from "../buttons/CtaButton";
import { IoCheckmark } from "react-icons/io5";
import PropTypes from 'prop-types';

function WhyUs({ backgroundColor }) {

    const mainContainerStyle = {
        backgroundColor: backgroundColor || '#E2F3ED', // Use the provided color or fallback to the default color
    };
    return (
        <div className="why-mainContainer" style={mainContainerStyle}>
            <div className="why-container">
                <div className="why-upper">
                    <div className="upper-graphic">
                        <div className="upper-bg">
                            <img src={ladyImage} alt="" />
                        </div>
                    </div>

                    <div className="upper-text">
                        <h1>Why Choose Us</h1>
                        <ul>
                            <li><span><IoCheckmark /></span>Patient-centric Approach</li>
                            <li><span><IoCheckmark /></span>Collaborative Leadership</li>
                            <li><span><IoCheckmark /></span>Safety First Quality Must</li>
                            <li><span><IoCheckmark /></span>Patient-centric Approach</li>
                            <li><span><IoCheckmark /></span>Collaborative Leadership</li>
                            <li><span><IoCheckmark /></span>Safety First Quality Must</li>

                        </ul>

                    </div>
                </div>

                <div className="why-bottom">
                    <h1>Wellness, Compassion, Quality</h1>
                    <p>The service provides immediate
                        medical care to patients with acute illnesses or injuries
                        that require immediate attention Emergency care available 
                        for all patients with critical medical conditions.
                    </p>
                    <CtaButton
                        element="/appointment"
                    >
                        Make an Appointment
                    </CtaButton>
                </div>
            </div>
        </div>
    )
}

WhyUs.propTypes = {
    backgroundColor: PropTypes.string,
};
export default WhyUs;