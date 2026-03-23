import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ content, children, position = 'top' }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div 
            className="tooltip-container"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={`tooltip-content tooltip-${position}`}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
