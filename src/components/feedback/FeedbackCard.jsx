import { FaStar } from "react-icons/fa";
import "./feedback.scss";

function FeedbackCard() {
    return (
        <div className="feedback-card">
            <h3>The best service I have ever had</h3>
            <p>The facility inside the hospital is very good and the result is very good and the treatment is very good and the behavior of the staff is also awesome</p>
            <div className="star-container">
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
                <span><FaStar /></span>
            </div>
        </div>
    )
}

export default FeedbackCard;