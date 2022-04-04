import React, { useEffect, useState } from "react";
import './SortedVisualization.css';

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const SortedVisualization = props => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        resetArray();

    }, []);

    const numsInArray = Math.round(window.innerWidth / 100 * 80 / 5);
    const resetArray = () => {
        let newArray = [];
        for (let i = 0; i < numsInArray; i++) {
            newArray.push(randomIntFromInterval(5, 800));
        }
        setArray(newArray);
    };

    console.log('array:', numsInArray);
    return (
        <div className="array-container">
            {array.map((val, idx) => (
                <div 
                    className="array-bar" 
                    key={idx}
                    style={{
                        height: `${val}px`
                    }}    
                ></div>
            ))}
        </div>
    );
};

export default SortedVisualization;