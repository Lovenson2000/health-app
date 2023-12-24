import FeedbackCard from "./FeedbackCard";
import "./feedbackWrapper.scss";

import React from 'react'

function FeedbackWrapper() {
    return (
        <div className="about-feedback">
            <h1 className="feedback-header">What our clients say about our services</h1>
            <div className="feedback-container">
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
            </div>
        </div>
    )
}

export default FeedbackWrapper;

