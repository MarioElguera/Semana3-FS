import React, { useState } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const incrementProgress = () => {
        if (progress < 100) {
            setProgress(progress + 10);
        }
    };

    return (
        <div className="progress-container">
            <div className="progress-bar-background">
                <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <button className="progress-button" onClick={incrementProgress}>
                Aumentar Progreso
            </button>
            <p className="progress-text">{progress}%</p>
        </div>
    );
};

export default ProgressBar;
