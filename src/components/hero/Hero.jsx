
import heroImage from "../../assets/images/mainimgmain.png";
import CtaButton from '../buttons/CtaButton';
import "./hero.scss";

function Hero() {
    return (
        <main className='hero-container'>
            <div className="hero-text">
                <h3>Welcome to WeHealthy</h3>
                <h1>Your Journey to <span>Better</span> Health Starts Here</h1>
                <CtaButton>Make Appointments</CtaButton>
            </div>
            <div className="hero-graphic">
                <div className="background">
                    <img src={heroImage} alt="hero" />
                </div>
            </div>
        </main>
    )
}

export default Hero;