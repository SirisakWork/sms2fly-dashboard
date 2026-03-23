import React from 'react';

const FaqItem = ({ question, answer }) => {
    return (
        <div className="faq-item">
            <div className="faq-item-content">
                <h4 className="faq-question">{question}</h4>
                <p className="faq-answer">{answer}</p>
            </div>
        </div>
    );
};

export default FaqItem;
