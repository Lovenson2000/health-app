import React, { useEffect, useState } from 'react';
import { statistics } from '../../utils/data';
import "./statistics.scss";

function Statistics() {
    return (
        <div className='container'>
            <div className="card-container">
                {statistics.map((statistic, index) => (
                    <StatisticsAnimation
                        key={index}
                        title={statistic.title}
                        quantity={statistic.quantity}
                    />
                ))}

            </div>
        </div>
    );
};

const StatisticsAnimation = ({ title, quantity }) => {
    const [currentValue, setCurrentValue] = useState(0);
    const interval = 1000;

    useEffect(() => {

        const duration = quantity >= 100 ? Math.floor(interval / 1000) : Math.floor(interval / 5);
        const counter = setInterval(() => {
            setCurrentValue((prevValue) => {
                const newValue = prevValue + 1;

                if (newValue === quantity) {
                    clearInterval(counter);
                }

                return newValue;
            });
        }, duration);

        return () => clearInterval(counter);
    }, [quantity]);

    return (
        <div className='stat-card'>
            <h3>{title}</h3>
            <h4>{currentValue}+</h4>
        </div>
    );
};

export default Statistics;
