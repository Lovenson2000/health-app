import { Link } from "react-router-dom";
import "./ctabutton.scss";

//Building a reusable button component
function CtaButton({ children, element }) {
    return (
        <Link
            to={element}
            className="cta-button"
        >
            {children}
        </Link>
    );
}

export default CtaButton;